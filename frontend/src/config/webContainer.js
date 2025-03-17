import { WebContainer } from '@webcontainer/api';

let webContainerInstance = null;
let bootPromise = null;
let webContainerSupported = null; // null = unknown, true/false after check

// Check if the environment supports WebContainer
const checkWebContainerSupport = () => {
  try {
    // Check for required browser features
    if (typeof window === 'undefined') return false;
    if (typeof SharedArrayBuffer === 'undefined') return false;
    
    // Check for cross-origin isolation (needed for SharedArrayBuffer)
    if (!window.crossOriginIsolated) {
      console.warn('Cross-Origin-Isolation is not enabled. WebContainer requires this to be enabled.');
      
      // Log more detailed information to help with debugging
      console.info('Current isolation status:', {
        crossOriginIsolated: window.crossOriginIsolated,
        coopHeader: document.querySelector('meta[http-equiv="Cross-Origin-Opener-Policy"]')?.content,
        coepHeader: document.querySelector('meta[http-equiv="Cross-Origin-Embedder-Policy"]')?.content
      });
      
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error checking WebContainer support:', error);
    return false;
  }
};

// Check if the browser is compatible with WebContainer
export const isBrowserCompatible = () => {
  try {
    // Check for modern browser features required by WebContainer
    const isModernBrowser = 'serviceWorker' in navigator && 
                           'ReadableStream' in window && 
                           'WritableStream' in window;
    
    // Check for Chrome/Edge/Opera (Chromium-based browsers)
    const isChromiumBased = /Chrome|Edge|Opera/.test(navigator.userAgent) && 
                           /Chrome|Edge|Opera/.test(navigator.appName);
    
    // Firefox is also supported with the right flags
    const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;
    
    return isModernBrowser && (isChromiumBased || isFirefox);
  } catch (error) {
    console.error('Error checking browser compatibility:', error);
    return false;
  }
};

export const getWebContainer = async () => {
    // First check - if we have an instance, return it
    if (webContainerInstance !== null) {
        return webContainerInstance;
    }
    
    // Check if WebContainer is supported if we haven't checked yet
    if (webContainerSupported === null) {
        webContainerSupported = checkWebContainerSupport();
    }
    
    // If WebContainer is not supported, return null immediately
    if (!webContainerSupported) {
        console.warn('WebContainer is not supported in this environment');
        
        // Check if it's a browser compatibility issue or a headers issue
        if (isBrowserCompatible()) {
            console.info('Your browser is compatible, but cross-origin isolation is not enabled. This is likely a server configuration issue.');
            console.info('Please ensure the following headers are set on your server:');
            console.info('Cross-Origin-Opener-Policy: same-origin');
            console.info('Cross-Origin-Embedder-Policy: require-corp');
        } else {
            console.info('Your browser may not be compatible with WebContainer. Please try a modern Chromium-based browser.');
        }
        
        return null;
    }
    
    // If we're already booting, return the existing promise
    if (bootPromise !== null) {
        return bootPromise;
    }
    
    try {
        // Create a boot promise with timeout
        const timeoutMs = 30000; // 30 seconds timeout (increased from 15s)
        
        const bootWithTimeout = new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('WebContainer boot timed out'));
            }, timeoutMs);
            
            // Use the webcontainers.io API
            WebContainer.boot({
                // Specify the CDN URL for the service worker
                serviceWorkerUrl: 'https://cdn.jsdelivr.net/npm/@webcontainer/api@1.5.0/dist/webcontainer.worker.js',
                // Optional: Specify a custom base URL for the worker
                coep: 'require-corp',
                coop: 'same-origin'
            })
            .then(instance => {
                clearTimeout(timeout);
                resolve(instance);
            })
            .catch(error => {
                clearTimeout(timeout);
                reject(error);
            });
        });
        
        bootPromise = bootWithTimeout;
        
        // Wait for the WebContainer to boot
        console.log("Booting WebContainer...");
        webContainerInstance = await bootPromise;
        console.log("WebContainer boot complete");
        
        // Set up cleanup
        window.addEventListener('beforeunload', () => {
            if (webContainerInstance) {
                console.log("Cleaning up WebContainer before page unload");
                // Any cleanup needed
            }
        });
        
        return webContainerInstance;
    } catch (error) {
        // Reset the bootPromise so a new attempt can be made if needed
        bootPromise = null;
        console.error("WebContainer boot failed:", error);
        
        // If it's a fundamental compatibility issue, mark as unsupported
        if (error.message && (
            error.message.includes('SharedArrayBuffer') || 
            error.message.includes('cross-origin-isolated') ||
            error.message.includes('security policy')
        )) {
            webContainerSupported = false;
        }
        
        return null;
    }
};

// Public function to check if WebContainer is supported
export const isWebContainerSupported = () => {
    if (webContainerSupported === null) {
        webContainerSupported = checkWebContainerSupport();
    }
    return webContainerSupported;
};

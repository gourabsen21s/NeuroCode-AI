const languageMap = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  html: 'html',
  css: 'css',
  scss: 'scss',
  less: 'less',
  json: 'json',
  md: 'markdown',
  py: 'python',
  rb: 'ruby',
  java: 'java',
  c: 'c',
  cpp: 'cpp',
  cs: 'csharp',
  go: 'go',
  php: 'php',
  sh: 'bash',
  yaml: 'yaml',
  yml: 'yaml',
  xml: 'xml',
  sql: 'sql',
  // Add more mappings as needed
};

/**
 * Get the language for syntax highlighting based on file extension
 * @param {string} filename - The name of the file
 * @returns {string} The language name for highlight.js
 */
export const getLanguageFromFilename = (filename) => {
  if (!filename) return 'plaintext';
  
  const extension = filename.split('.').pop().toLowerCase();
  return languageMap[extension] || 'plaintext';
};

/**
 * Safely highlight code with fallback mechanisms
 * @param {string} code - The code to highlight
 * @param {string} language - The language for highlighting
 * @returns {string} The highlighted HTML
 */
export const safeHighlight = (code, language) => {
  if (!code) return '';
  
  try {
    // Try using the window.hljs first (from CDN)
    if (window.hljs && window.hljs.highlight) {
      return window.hljs.highlight(code, { language }).value;
    }
    
    // Fallback to imported hljs if available
    if (typeof hljs !== 'undefined' && hljs.highlight) {
      return hljs.highlight(language, code).value;
    }
    
    // Last resort: return the code without highlighting
    console.warn('highlight.js not available for syntax highlighting');
    return code;
  } catch (error) {
    console.error('Error highlighting code:', error);
    return code;
  }
};

/**
 * Highlight an element after it's rendered in the DOM
 * @param {HTMLElement} element - The element to highlight
 */
export const highlightElement = (element) => {
  if (!element) return;
  
  try {
    // Try using the window.hljs first (from CDN)
    if (window.hljs && window.hljs.highlightElement) {
      window.hljs.highlightElement(element);
      return;
    }
    
    // Fallback to imported hljs if available
    if (typeof hljs !== 'undefined' && hljs.highlightElement) {
      hljs.highlightElement(element);
      return;
    }
    
    console.warn('highlight.js not available for highlighting element');
  } catch (error) {
    console.error('Error highlighting element:', error);
  }
}; 

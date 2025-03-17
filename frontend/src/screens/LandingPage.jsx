import React from "react"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-900 antialiased min-h-screen overflow-x-hidden bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black z-50 px-5 md:px-10 py-4 flex justify-between items-center border-b border-gray-800">
        <div className="text-2xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            NeuroCode AI
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium text-gray-300 hover:text-teal-400 transition-colors">Features</a>
          <a href="#testimonials" className="font-medium text-gray-300 hover:text-teal-400 transition-colors">Testimonials</a>
          <Link to="/login" className="font-medium text-teal-400 border border-teal-400 px-4 py-2 rounded hover:bg-teal-400/10 transition-colors">Login</Link>
          <Link to="/register" className="font-medium text-black bg-teal-400 px-4 py-2 rounded shadow-md hover:bg-teal-500 transition-colors">Sign Up</Link>
        </div>
        <button className="md:hidden text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Hero Section */}
      <header className="pt-32 pb-10 px-5 md:px-10 max-w-5xl mx-auto text-center">
        <div className="mb-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            NeuroCode AI: The<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">AI Code Editor</span><br/>
            For Your Next Project
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">Bring your ideas to life with the best AI tools integrated into a single code editor. Built to supercharge your development from inception to scale.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="px-6 py-3 bg-teal-400 text-black font-medium rounded shadow-md hover:bg-teal-500 transition-colors">Download For Free</Link>
            <a href="#features" className="px-6 py-3 bg-transparent border border-gray-700 text-gray-300 font-medium rounded hover:border-teal-400 hover:text-teal-400 transition-colors">Learn More</a>
          </div>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          <div className="relative rounded-lg shadow-xl overflow-hidden border border-gray-800">
            <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="NeuroCode AI Editor" className="w-full h-auto" />
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Multi-Agent Collaboration </span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Chat & edit with AI</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Real-Time Multi-User Editing</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>AI-Powered Chat Assistant</span>
          </div>
        </div>
        
        <div className="mt-6 inline-block px-4 py-1 bg-gray-800/50 rounded-full">
          <span className="text-xs font-semibold text-teal-400">V1.0</span>
          <span className="mx-2 text-gray-600">|</span>
          <span className="text-xs text-gray-400">Now with Coding Agents!</span>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-5 md:px-10 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">NeuroCode AI natively integrates the best AI tools<br/>into a single, powerful editor.</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">The AI space changes fast— NeuroCode AI curates the best AI tools on the market, and integrates them into a powerful editor.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-teal-400/30 transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">AI powered Task Management</h3>
              <p className="text-gray-400">Assign tasks to AI agents or team members, track progress, and get real-time status updates—all in one place for a feedback loop to add features, fix bugs, and more.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-teal-400/30 transition-all">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Chat & edit with AI</h3>
              <p className="text-gray-400">NeuroCode Chat is built upon the foundation of advanced AI models, with changes and a unified user experience to make coding more intuitive.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-teal-400/30 transition-all">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Real-Time Multi-User Editing</h3>
              <p className="text-gray-400">Work together with your team on the same project simultaneously, with live updates and AI-assisted suggestions.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-teal-400/30 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-teal-400">Smart AI Chat Assistant.</h3>
              <p className="text-gray-400">Need help? Our AI-powered assistant answers questions, explains code, and provides instant solutions—right within the editor.</p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-teal-900/30 to-blue-900/30 p-8 rounded-lg border border-teal-900/30">
            <h3 className="text-2xl font-bold text-center mb-6">Always Get The Best,<br/>With A Single Subscription</h3>
            <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">The best AI model for coding changes by the week. NeuroCode Router automatically connects you to the highest-performing AI models for coding across all tools.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-teal-400 flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-black font-bold mr-3">1</div>
                  <h4 className="font-semibold text-teal-400">NeuroCode Model</h4>
                </div>
                <p className="text-gray-400 text-sm">Our curated model selection for the best performance</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold mr-3">2</div>
                  <h4 className="font-semibold">Claude 3.5 Sonnet</h4>
                </div>
                <p className="text-gray-400 text-sm">Anthropic's powerful model for coding tasks</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold mr-3">3</div>
                  <h4 className="font-semibold">GPT-4o</h4>
                </div>
                <p className="text-gray-400 text-sm">OpenAI's latest model for complex coding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 px-5 md:px-10 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Open source is transparency.</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-400 font-bold mr-3">✓</div>
              <p className="text-gray-300">See every line on our public repos.</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-400 font-bold mr-3">✓</div>
              <p className="text-gray-300">We never store your code.</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center text-teal-400 font-bold mr-3">✓</div>
              <p className="text-gray-300">Zero Data Retention policy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 md:px-10 bg-gradient-to-r from-teal-900/30 to-blue-900/30 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try NeuroCode AI for free.</h2>
          <p className="text-xl mb-10 text-gray-300">Assign tasks to AI agents or team members with status updates</p>
          <Link to="/register" className="inline-block px-8 py-4 bg-teal-400 text-black font-medium rounded-md shadow-lg hover:bg-teal-500 transition-colors">Download For Free</Link>
          <p className="mt-4 text-sm text-gray-400">Interested in contributing? <a href="#" className="text-teal-400 hover:underline">Join our GitHub</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-5 md:px-10 bg-black border-t border-gray-800 text-gray-400">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                  NeuroCode AI
                </span>
              </div>
              <p className="text-gray-500 mb-4">Make What Excites.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Discord</a></li>
                <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} NeuroCode AI. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">GitHub</a>
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage 

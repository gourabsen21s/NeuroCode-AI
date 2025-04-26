import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackgroundPattern from '../components/BackgroundPattern';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased min-h-screen overflow-x-hidden bg-black text-white relative">
      <BackgroundPattern />
      <Navbar />
      
      <div className="pt-28 pb-20 px-5 md:px-10 max-w-6xl mx-auto relative z-1 mt-24">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            NeuroCode AI Documentation
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Welcome to the NeuroCode AI documentation. This guide will help you understand the platform's features 
            and how to make the most of its AI-powered collaborative development capabilities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Documentation Navigation Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Contents</h3>
              <nav className="flex flex-col space-y-2">
                <a 
                  href="#getting-started" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('getting-started'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'getting-started' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  Getting Started
                </a>
                <a 
                  href="#projects" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'projects' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  Projects &amp; Collaboration
                </a>
                <a 
                  href="#chat" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('chat'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'chat' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  Real-time Chat
                </a>
                <a 
                  href="#ai-assistance" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('ai-assistance'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'ai-assistance' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  AI Assistance
                </a>
                <a 
                  href="#webcontainer" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('webcontainer'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'webcontainer' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  WebContainer Execution
                </a>
                <a 
                  href="#file-management" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('file-management'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'file-management' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  File Management
                </a>
                <a 
                  href="#best-practices" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('best-practices'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'best-practices' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  Best Practices
                </a>
                <a 
                  href="#troubleshooting" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('troubleshooting'); }}
                  className={`text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === 'troubleshooting' ? 'bg-teal-400/20 text-teal-400' : 'text-gray-300 hover:bg-gray-800'}`}
                >
                  Troubleshooting
                </a>
              </nav>
            </div>
          </div>

          {/* Documentation Content */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {/* Getting Started Section */}
              <section id="getting-started" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">Getting Started</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">What is NeuroCode AI?</h3>
                      <p className="text-gray-300">
                        NeuroCode AI is a collaborative AI-powered development platform where you can create projects, 
                        invite collaborators, chat in real time, and leverage AI-powered code generation. The platform 
                        allows seamless project management and execution directly in the browser using WebContainer technology.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Creating an Account</h3>
                      <p className="text-gray-300 mb-4">
                        To get started with NeuroCode AI, you'll need to create an account:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>Click on the "Sign up" button in the top navigation bar</li>
                        <li>Enter your email address and create a password</li>
                        <li>Complete the registration process</li>
                        <li>You'll be automatically logged in and redirected to your dashboard</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Dashboard Overview</h3>
                      <p className="text-gray-300 mb-2">
                        After logging in, you'll be taken to your dashboard, which shows:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Your existing projects</li>
                        <li>Option to create new projects</li>
                        <li>Invitations to collaborate on other projects</li>
                        <li>User account settings</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">Quick Tip</h4>
                      <p className="text-gray-300">
                        If you're new to NeuroCode AI, we recommend starting with a simple project to familiarize 
                        yourself with the interface before inviting collaborators.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects & Collaboration Section */}
              <section id="projects" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">Projects &amp; Collaboration</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Creating a New Project</h3>
                      <p className="text-gray-300 mb-4">
                        To create a new project:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>From your dashboard, click the "Create New Project" button</li>
                        <li>Enter a unique project name</li>
                        <li>Optionally, add a description of what the project is about</li>
                        <li>Click "Create Project" to be taken to your new project workspace</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Inviting Collaborators</h3>
                      <p className="text-gray-300 mb-4">
                        To invite others to collaborate on your project:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>Open the project you want to share</li>
                        <li>Click on the "Collaborators" tab or button</li>
                        <li>Enter the email addresses of the people you want to invite</li>
                        <li>They will receive an invitation via email and can join the project</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Collaboration Features</h3>
                      <p className="text-gray-300 mb-2">
                        NeuroCode AI offers several features to facilitate collaboration:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li><span className="font-semibold">Real-time editing:</span> See changes from collaborators as they happen</li>
                        <li><span className="font-semibold">Chat system:</span> Communicate directly within the platform</li>
                        <li><span className="font-semibold">AI assistance:</span> Get code suggestions and help from the integrated AI</li>
                        <li><span className="font-semibold">Project management:</span> Track changes and progress in your project</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">Collaboration Tip</h4>
                      <p className="text-gray-300">
                        When working with multiple collaborators, establish clear coding standards and use 
                        descriptive comments to make sure everyone understands the codebase.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Real-time Chat Section */}
              <section id="chat" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">Real-time Chat</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Using the Chat Interface</h3>
                      <p className="text-gray-300 mb-4">
                        The real-time chat feature allows team members to communicate while working on a project:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Open the chat panel from the main project interface</li>
                        <li>Type your message and press Enter to send</li>
                        <li>All collaborators in the project will see your messages in real-time</li>
                        <li>Chat history is preserved throughout the project lifetime</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Chat Commands</h3>
                      <p className="text-gray-300 mb-4">
                        You can use special commands in the chat for additional functionality:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-800 rounded-lg">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 text-left text-gray-200 border-b border-gray-700">Command</th>
                              <th className="py-2 px-4 text-left text-gray-200 border-b border-gray-700">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">@ai [prompt]</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Ask the AI assistant for help with code</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">/help</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Display available chat commands</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">@[username]</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Mention a specific collaborator</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">Chat Tip</h4>
                      <p className="text-gray-300">
                        Use the chat to discuss high-level concepts and design decisions before implementing them in code.
                        This helps ensure all team members are aligned on the approach.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* AI Assistance Section */}
              <section id="ai-assistance" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">AI Assistance</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Using the AI Assistant</h3>
                      <p className="text-gray-300 mb-4">
                        NeuroCode AI integrates powerful AI capabilities to help with your development:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>Type <code className="bg-gray-800 px-2 py-0.5 rounded">@ai</code> followed by your prompt in the chat</li>
                        <li>The AI will analyze your request and provide helpful responses</li>
                        <li>Code suggestions will be formatted for easy reading and implementation</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Effective AI Prompts</h3>
                      <p className="text-gray-300 mb-4">
                        To get the best results from the AI assistant, consider these tips:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Be specific about what you need</li>
                        <li>Provide context about your project and requirements</li>
                        <li>Specify the programming language or framework if relevant</li>
                        <li>Ask for explanations if you need to understand the code</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Example AI Prompts</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-200 font-semibold">@ai Create a React component for a user profile card with name, avatar, and bio</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-200 font-semibold">@ai How do I implement JWT authentication in Express.js?</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-200 font-semibold">@ai Explain the difference between useEffect and useLayoutEffect in React</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-200 font-semibold">@ai Generate a MongoDB schema for a blog post with author, content, tags, and comments</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">AI Assistance Tip</h4>
                      <p className="text-gray-300">
                        While the AI is powerful, always review generated code to ensure it meets your specific requirements
                        and follows your project's coding standards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* WebContainer Execution Section */}
              <section id="webcontainer" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">WebContainer Execution</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Understanding WebContainer</h3>
                      <p className="text-gray-300 mb-4">
                        WebContainer allows you to run your code directly in the browser without the need for server-side execution:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Full Node.js environment running in your browser</li>
                        <li>Execute npm commands, run servers, and test applications</li>
                        <li>Experience near-native performance for many development tasks</li>
                        <li>No installation or complex setup required</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Running Your Code</h3>
                      <p className="text-gray-300 mb-4">
                        To execute your code in the WebContainer:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>Navigate to your project in NeuroCode AI</li>
                        <li>Click the "Run" button in the project interface</li>
                        <li>The system will build and execute your project</li>
                        <li>View the output in the integrated terminal and preview windows</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">WebContainer Limitations</h3>
                      <p className="text-gray-300 mb-4">
                        While powerful, WebContainer has some limitations to be aware of:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Limited system resources compared to a local environment</li>
                        <li>Some native modules or system-level operations may not work</li>
                        <li>Limited persistent storage (project files are preserved)</li>
                        <li>Not all networking capabilities are available</li>
                        <li>Performance may vary based on your device and browser</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">WebContainer Tip</h4>
                      <p className="text-gray-300">
                        For optimal performance, keep your projects lightweight and avoid resource-intensive operations
                        when using WebContainer.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* File Management Section */}
              <section id="file-management" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">File Management</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Project File Structure</h3>
                      <p className="text-gray-300 mb-4">
                        NeuroCode AI provides tools to manage your project's file structure:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Visual file tree explorer in the sidebar</li>
                        <li>Create, edit, delete, and rename files</li>
                        <li>Organize files into directories</li>
                        <li>All changes are synchronized in real-time with collaborators</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Creating Project Structure with AI</h3>
                      <p className="text-gray-300 mb-4">
                        You can leverage the AI to help create proper file structures:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>In the chat, use <code className="bg-gray-800 px-2 py-0.5 rounded">@ai generate project structure for [type of project]</code></li>
                        <li>The AI will suggest a file structure appropriate for your project type</li>
                        <li>Review the suggested structure</li>
                        <li>Apply the suggestions to create the files and directories</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">File Operations</h3>
                      <p className="text-gray-300 mb-2">
                        Common file operations in NeuroCode AI:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-800 rounded-lg">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 text-left text-gray-200 border-b border-gray-700">Operation</th>
                              <th className="py-2 px-4 text-left text-gray-200 border-b border-gray-700">How to Perform</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Create File</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Right-click in file explorer &gt; New File</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Create Directory</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Right-click in file explorer &gt; New Directory</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Rename</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Right-click on file/directory &gt; Rename</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Delete</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Right-click on file/directory &gt; Delete</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">File Management Tip</h4>
                      <p className="text-gray-300">
                        Follow standard organizational patterns for your project type to make it easier for collaborators
                        to understand the codebase. Use meaningful names for files and directories.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Practices Section */}
              <section id="best-practices" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">Best Practices</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Collaborative Development</h3>
                      <p className="text-gray-300 mb-2">
                        Tips for effective collaboration in NeuroCode AI:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Communicate regularly with team members in the chat</li>
                        <li>Document your code with clear comments</li>
                        <li>Break down large tasks into smaller, manageable components</li>
                        <li>Discuss significant architectural changes before implementing them</li>
                        <li>Use consistent coding standards across the project</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Working with AI Effectively</h3>
                      <p className="text-gray-300 mb-2">
                        Maximize the benefits of the AI assistant:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Provide clear, specific prompts with context</li>
                        <li>Use AI for generating boilerplate code to save time</li>
                        <li>Ask AI to explain complex concepts or code you don't understand</li>
                        <li>Review and understand AI-generated code before implementing it</li>
                        <li>Use AI to help troubleshoot errors or bugs</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Project Organization</h3>
                      <p className="text-gray-300 mb-2">
                        Keep your projects well-organized:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Follow common project structure patterns for your stack</li>
                        <li>Group related files together in directories</li>
                        <li>Use consistent naming conventions</li>
                        <li>Create a README.md file with project information</li>
                        <li>Document environment variables and configuration requirements</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">Pro Tip</h4>
                      <p className="text-gray-300">
                        Consider adding a "Getting Started" document to your project explaining how new collaborators
                        can understand the codebase and contribute effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Troubleshooting Section */}
              <section id="troubleshooting" className="scroll-mt-24">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-teal-400">Troubleshooting</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Common Issues</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-white">WebContainer Execution Problems</h4>
                          <p className="text-gray-300 mb-2">
                            If your code isn't running correctly in WebContainer:
                          </p>
                          <ul className="list-disc pl-6 space-y-1 text-gray-300">
                            <li>Check for browser compatibility (use Chrome or Edge for best results)</li>
                            <li>Ensure your code doesn't use unsupported native modules</li>
                            <li>Verify that all required dependencies are properly installed</li>
                            <li>Check that environment variables are correctly set</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white">Real-time Collaboration Issues</h4>
                          <p className="text-gray-300 mb-2">
                            If you're experiencing problems with collaboration:
                          </p>
                          <ul className="list-disc pl-6 space-y-1 text-gray-300">
                            <li>Check your internet connection</li>
                            <li>Refresh the page to reestablish the connection</li>
                            <li>Ensure all collaborators have the proper permissions</li>
                            <li>Try closing and reopening the project</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-white">AI Assistant Not Responding</h4>
                          <p className="text-gray-300 mb-2">
                            If the AI assistant isn't working as expected:
                          </p>
                          <ul className="list-disc pl-6 space-y-1 text-gray-300">
                            <li>Ensure you're using the correct @ai format</li>
                            <li>Try breaking down complex requests into simpler ones</li>
                            <li>Refresh the page to reset the connection</li>
                            <li>Check if there are any system notices about AI service availability</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Error Messages</h3>
                      <p className="text-gray-300 mb-4">
                        Understanding common error messages:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-800 rounded-lg">
                          <thead>
                            <tr>
                              <th className="py-2 px-4 text-left text-gray-200 border-b border-gray-700">Error</th>
                              <th className="py-2 px-4 text-left text-gray-200 border-b border-gray-700">Possible Solution</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">"Connection lost"</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Check your internet connection and refresh the page</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">"WebContainer initialization failed"</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Try using a different browser or check for browser compatibility</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">"Permission denied"</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Contact the project owner to ensure you have the correct access rights</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">"AI service unavailable"</td>
                              <td className="py-2 px-4 text-gray-300 border-b border-gray-700">Wait a few minutes and try again, or check system status</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Getting Help</h3>
                      <p className="text-gray-300 mb-2">
                        If you're still experiencing issues:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Check the <Link to="/faq" className="text-teal-400 hover:underline">FAQ page</Link> for additional troubleshooting tips</li>
                        <li>Contact support by emailing <a href="mailto:support@neurocode-ai.com" className="text-teal-400 hover:underline">support@neurocode-ai.com</a></li>
                        <li>Visit our <Link to="/community" className="text-teal-400 hover:underline">community forums</Link> to see if others have experienced similar issues</li>
                        <li>For urgent issues, use the feedback button within the application</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-2 text-teal-400">Troubleshooting Tip</h4>
                      <p className="text-gray-300">
                        When reporting issues, always include detailed information about what you were doing, 
                        the error messages you saw, and the browser you're using to help us resolve problems faster.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 
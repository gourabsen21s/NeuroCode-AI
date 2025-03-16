"use client"

import "../index.css"
import React, { useState, useEffect, useContext, useRef } from "react"
import { UserContext } from "../context/user.context"
import { useLocation } from "react-router-dom"
import axios from "../config/axios"
import { initializeSocket, receiveMessage, sendMessage } from "../config/socket"
import Markdown from "markdown-to-jsx"
import hljs from "highlight.js"
import { getWebContainer } from "../config/webContainer"

// Add resize functionality
const ResizeHandle = ({ direction, onResize }) => {
  const handleRef = useRef(null);
  const isResizing = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    isResizing.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
    document.body.classList.add('resize-active');
    
    // Add event listeners to document to handle mouse movement and release
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Prevent default to avoid text selection during resize
    e.preventDefault();
    
    // Add active class to handle
    if (handleRef.current) {
      handleRef.current.classList.add('active');
    }
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    
    const deltaX = e.clientX - lastPosition.current.x;
    const deltaY = e.clientY - lastPosition.current.y;
    
    lastPosition.current = { x: e.clientX, y: e.clientY };
    
    if (onResize) {
      onResize(direction, deltaX, deltaY);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.classList.remove('resize-active');
    
    // Remove event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    
    // Remove active class from handle
    if (handleRef.current) {
      handleRef.current.classList.remove('active');
    }
  };

  const isHorizontal = direction === 'right' || direction === 'left';
  const className = `resize-handle ${isHorizontal ? 'resize-handle-horizontal' : 'resize-handle-vertical'} resize-handle-${direction}`;

  return (
    <div 
      ref={handleRef}
      className={className}
      onMouseDown={handleMouseDown}
    />
  );
};

function SyntaxHighlightedCode(props) {
  const ref = useRef(null)

  React.useEffect(() => {
    if (ref.current && props.className?.includes("lang-") && window.hljs) {
      window.hljs.highlightElement(ref.current)
      ref.current.removeAttribute("data-highlighted")
    }
  }, [props.className, props.children])

  return <code {...props} ref={ref} />
}

const Project = () => {
  const location = useLocation()
  const { user } = useContext(UserContext)
  const messageBox = React.createRef()

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(new Set())
  const [project, setProject] = useState(location.state.project)
  const [message, setMessage] = useState("")
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [fileTree, setFileTree] = useState({})
  const [currentFile, setCurrentFile] = useState(null)
  const [openFiles, setOpenFiles] = useState([])
  const [webContainer, setWebContainer] = useState(null)
  const [iframeUrl, setIframeUrl] = useState(null)
  const [runProcess, setRunProcess] = useState(null)
  const [activeTab, setActiveTab] = useState("files")
  const [isLoading, setIsLoading] = useState(true)
  
  // Add state for panel sizes
  const [sidebarWidth, setSidebarWidth] = useState(300)
  const [fileExplorerHeight, setFileExplorerHeight] = useState(300)
  const [previewWidth, setPreviewWidth] = useState(null)

  // Handle resize for different panels
  const handleResize = (direction, deltaX, deltaY) => {
    switch (direction) {
      case 'right':
        setSidebarWidth(prevWidth => {
          const newWidth = prevWidth + deltaX;
          return Math.max(150, Math.min(window.innerWidth / 2, newWidth));
        });
        break;
      case 'bottom':
        setFileExplorerHeight(prevHeight => {
          const newHeight = prevHeight + deltaY;
          return Math.max(100, Math.min(window.innerHeight - 200, newHeight));
        });
        break;
      case 'left':
        if (iframeUrl && webContainer) {
          setPreviewWidth(prevWidth => {
            const newWidth = (prevWidth || document.querySelector('.preview-pane')?.offsetWidth || 0) - deltaX;
            return Math.max(200, newWidth);
          });
        }
        break;
      default:
        break;
    }
  };

  const handleUserClick = (id) => {
    setSelectedUserId((prevSelectedUserId) => {
      const newSelectedUserId = new Set(prevSelectedUserId)
      if (newSelectedUserId.has(id)) {
        newSelectedUserId.delete(id)
      } else {
        newSelectedUserId.add(id)
      }
      return newSelectedUserId
    })
  }

  function addCollaborators() {
    axios
      .put("/projects/add-user", {
        projectId: location.state.project._id,
        users: Array.from(selectedUserId),
      })
      .then((res) => {
        setIsModalOpen(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const send = () => {
    sendMessage("project-message", {
      message,
      sender: user,
    })
    setMessages((prevMessages) => [...prevMessages, { sender: user, message }])
    setMessage("")
  }

  function WriteAiMessage(message) {
    try {
      const messageObject = JSON.parse(message)
      return (
        <div className="ai-message">
          <Markdown
            children={messageObject.text}
            options={{
              overrides: {
                code: SyntaxHighlightedCode,
              },
            }}
          />
        </div>
      )
    } catch (e) {
      return <div className="error-message">Error parsing message</div>
    }
  }

  useEffect(() => {
    initializeSocket(project._id)

    if (!webContainer) {
      getWebContainer().then((container) => {
        setWebContainer(container)
        console.log("container started")
      })
    }

    receiveMessage("project-message", (data) => {
      if (data.sender._id == "ai") {
        try {
          const message = JSON.parse(data.message)
          webContainer?.mount(message.fileTree)
          if (message.fileTree) {
            setFileTree(message.fileTree || {})
          }
        } catch (e) {
          console.error("Error parsing AI message", e)
        }
        setMessages((prevMessages) => [...prevMessages, data])
      } else {
        setMessages((prevMessages) => [...prevMessages, data])
      }
    })

    axios.get(`/projects/get-project/${location.state.project._id}`).then((res) => {
      setProject(res.data.project)
      setFileTree(res.data.project.fileTree || {})
      setIsLoading(false)
    })

    axios
      .get("/users/all")
      .then((res) => {
        setUsers(res.data.users)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function saveFileTree(ft) {
    axios
      .put("/projects/update-file-tree", {
        projectId: project._id,
        fileTree: ft,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>
  }

  // Add this function to handle animation classes for the collaborator sidebar
  const getCollaboratorSidebarClasses = () => {
    let classes = "collaborator-sidebar resizable"
    if (isSidePanelOpen) {
      classes += " open"
    }
    return classes
  }

  return (
    <div className="editor-container">
      {/* SIDEBAR */}
      <div className="sidebar resizable" style={{ width: `${sidebarWidth}px` }}>
        {/* HEADER */}
        <div className="sidebar-header">
          <div className="project-title">{project.name || "Project"}</div>
          <div className="header-actions">
            <button onClick={() => setIsModalOpen(true)} className="icon-button" aria-label="Add collaborators">
              👥
            </button>
            <button
              onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
              className="icon-button"
              aria-label="Show collaborators"
            >
              👤
            </button>
          </div>
        </div>

        {/* FILE EXPLORER */}
        <div className="file-explorer resizable" style={{ height: `${fileExplorerHeight}px` }}>
          <div className="section-title">Project Files</div>
          <div className="file-list">
            {Object.keys(fileTree).map((file, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentFile(file)
                  setOpenFiles([...new Set([...openFiles, file])])
                }}
                className={`file-item ${currentFile === file ? "active" : ""}`}
              >
                <span className="file-icon">📄</span>
                <span className="file-name">{file}</span>
              </button>
            ))}
          </div>
          <ResizeHandle direction="bottom" onResize={handleResize} />
        </div>

        {/* CHAT */}
        <div className="chat-container resizable" style={{ height: `calc(100% - ${fileExplorerHeight}px - var(--sidebar-header-height))` }}>
          <div className="section-title">Chat</div>
          <div ref={messageBox} className="messages-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender._id === user._id.toString() ? "own-message" : ""} ${msg.sender._id === "ai" ? "ai-message-container" : ""}`}
              >
                <small className="sender-email">{msg.sender.email}</small>
                <div className="message-content">
                  {msg.sender._id === "ai" ? (
                    WriteAiMessage(msg.message)
                  ) : (
                    <p className="message-text">{msg.message}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="message-input-container">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              className="message-input"
              type="text"
              placeholder="Enter message"
            />
            <button onClick={send} className="send-button">
              Send
            </button>
          </div>
        </div>
        <ResizeHandle direction="right" onResize={handleResize} />
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content resizable">
        {/* TABS BAR */}
        <div className="tabs-bar">
          <div className="tabs-container">
            {openFiles.map((file, index) => (
              <button
                key={index}
                onClick={() => setCurrentFile(file)}
                className={`tab ${currentFile === file ? "active-tab" : ""}`}
              >
                <span className="tab-icon">📄</span>
                <span className="tab-name">{file}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenFiles(openFiles.filter((f) => f !== file))
                    if (currentFile === file) {
                      setCurrentFile(openFiles.length > 1 ? openFiles.filter((f) => f !== file)[0] : null)
                    }
                  }}
                  className="close-tab"
                >
                  ✕
                </button>
              </button>
            ))}
          </div>

          <div className="run-container">
            <button
              onClick={async () => {
                await webContainer.mount(fileTree)

                const installProcess = await webContainer.spawn("npm", ["install"])
                installProcess.output.pipeTo(
                  new WritableStream({
                    write(chunk) {
                      console.log(chunk)
                    },
                  }),
                )

                if (runProcess) {
                  runProcess.kill()
                }

                const tempRunProcess = await webContainer.spawn("npm", ["start"])
                tempRunProcess.output.pipeTo(
                  new WritableStream({
                    write(chunk) {
                      console.log(chunk)
                    },
                  }),
                )

                setRunProcess(tempRunProcess)

                webContainer.on("server-ready", (port, url) => {
                  console.log(port, url)
                  setIframeUrl(url)
                })
              }}
              className="run-button"
            >
              <span className="run-icon">▶</span>
              Run
            </button>
          </div>
        </div>

        {/* EDITOR & PREVIEW */}
        <div className="editor-preview-container">
          <div className="editor-pane resizable">
            {fileTree[currentFile] ? (
              <div className="code-editor">
                <pre className="code-container">
                  <code
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const updatedContent = e.target.innerText
                      const ft = {
                        ...fileTree,
                        [currentFile]: {
                          file: {
                            contents: updatedContent,
                          },
                        },
                      }
                      setFileTree(ft)
                      saveFileTree(ft)
                    }}
                    dangerouslySetInnerHTML={{
                      __html: hljs.highlight("javascript", fileTree[currentFile].file.contents).value,
                    }}
                    className="code-content"
                  />
                </pre>
              </div>
            ) : (
              <div className="empty-editor">
                <div className="empty-editor-content">
                  <div className="empty-editor-icon">📄</div>
                  <p className="empty-editor-text">Select a file to edit</p>
                </div>
              </div>
            )}
            {iframeUrl && webContainer && <ResizeHandle direction="right" onResize={handleResize} />}
          </div>

          {iframeUrl && webContainer && (
            <div className="preview-pane resizable" style={previewWidth ? { width: `${previewWidth}px` } : {}}>
              <div className="preview-header">
                <span className="preview-icon">🌐</span>
                <input
                  type="text"
                  onChange={(e) => setIframeUrl(e.target.value)}
                  value={iframeUrl}
                  className="url-input"
                />
              </div>
              <iframe src={iframeUrl} className="preview-iframe" />
              <ResizeHandle direction="left" onResize={handleResize} />
            </div>
          )}
        </div>
      </div>

      {/* COLLABORATOR SIDEBAR */}
      {isSidePanelOpen && (
        <div className={getCollaboratorSidebarClasses()}>
          <div className="collaborator-header">
            <h1 className="collaborator-title">Collaborators</h1>
            <button onClick={() => setIsSidePanelOpen(false)} className="close-sidebar">
              ✕
            </button>
          </div>
          <div className="collaborator-list">
            {project.users &&
              project.users.map((user, idx) => (
                <div key={idx} className="collaborator-item">
                  <div className="collaborator-avatar">{user.email[0].toUpperCase()}</div>
                  <h1 className="collaborator-email">{user.email}</h1>
                </div>
              ))}
          </div>
          <ResizeHandle direction="left" onResize={handleResize} />
        </div>
      )}

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <header className="modal-header">
              <h2 className="modal-title">Add Collaborators</h2>
              <button onClick={() => setIsModalOpen(false)} className="close-modal">
                ✕
              </button>
            </header>
            <div className="modal-content">
              {users.map((user) => (
                <div
                  key={user._id}
                  onClick={() => handleUserClick(user._id)}
                  className={`user-item ${Array.from(selectedUserId).indexOf(user._id) !== -1 ? "selected" : ""}`}
                >
                  <div className="user-avatar">{user.email[0].toUpperCase()}</div>
                  <h1 className="user-email">{user.email}</h1>
                  {Array.from(selectedUserId).indexOf(user._id) !== -1 && <span className="selected-icon">✓</span>}
                </div>
              ))}
            </div>
            <button onClick={addCollaborators} className="add-button">
              <span className="add-icon">👤</span>
              Add Collaborators
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project


# System Patterns

## Architecture Overview
NeuroCode-AI follows a MERN stack architecture (MongoDB, Express.js, React, Node.js) with additional services for real-time communication and AI integration. The system is split into frontend and backend components with a RESTful API interface between them. Socket.IO enables real-time collaboration, while WebContainer API allows for in-browser code execution.

## Key Technical Decisions
- MERN stack for full JavaScript ecosystem
- Socket.IO for real-time communication
- WebContainer API for browser-based code execution
- Google's Generative AI (Gemini) for AI code generation
- JWT authentication for security
- Redis for session management and caching
- Azure for cloud deployment

## Design Patterns
- MVC architecture for backend organization
- Context API for frontend state management
- RESTful API design for server communication
- Socket-based real-time updates
- Middleware pattern for authentication and validation
- Repository pattern for data access

## Component Relationships
- Frontend React components communicate with backend APIs
- Socket.IO connects clients in real-time for project collaboration
- User authentication secures access to projects and resources
- AI service integrates with chat functionality via @ai mentions
- WebContainer executes code in an isolated browser environment
- MongoDB stores persistent data (users, projects, file systems)
- Redis manages sessions and provides caching

## Data Flow
1. User authentication via JWT
2. Project management through RESTful APIs
3. Real-time collaboration via Socket.IO
4. AI code generation via Google Generative AI integration
5. In-browser code execution through WebContainer API
6. File tree/project structure persistence in MongoDB

## State Management
- React Context API for frontend state management
- Redux is not used in this implementation
- Backend state managed through MongoDB persistence
- Socket.IO for real-time state synchronization between users
- JWT for authentication state

## Error Handling
- Express middleware for API error handling
- Try-catch patterns in controllers and services
- HTTP status codes for appropriate error responses
- Frontend error boundaries for React component errors
- Socket connection error handling and reconnection strategies

## Security Considerations
- JWT for authentication
- Password hashing with bcrypt
- Express validation for input sanitization
- CORS configuration for API protection
- Secure WebSocket connections
- Environment variables for sensitive configuration 
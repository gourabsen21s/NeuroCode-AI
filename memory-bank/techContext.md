# Technical Context

## Technologies Used
- **Frontend**: 
  - React 18.3.1 (with React Router 7.0.2)
  - Vite 6.0.1 as build tool
  - Tailwind CSS for styling
  - MDB React UI Kit for UI components
  - Socket.IO Client for real-time communication
  - WebContainer API for in-browser code execution
  - Markdown-to-JSX for rendering markdown
  - Highlight.js for code highlighting

- **Backend**:
  - Node.js with Express.js
  - MongoDB with Mongoose ODM
  - Socket.IO for real-time communication
  - Redis (ioredis) for caching and session management
  - JWT for authentication
  - Google Generative AI (Gemini model) for AI assistance
  - bcrypt for password hashing
  - express-validator for input validation

## Development Environment
- Vite for frontend development with hot module reloading
- ESLint for code linting
- Node.js runtime environment
- Environment variables (.env) for configuration
- Cross-Origin headers configured for secure browser interactions
- WebSocket connections for real-time communication

## Dependencies
- Frontend dependencies in package.json include React, React Router, Axios, Socket.IO client, WebContainer API, and UI libraries
- Backend dependencies include Express, Mongoose, Socket.IO, JWT, bcrypt, and Google Generative AI
- Development dependencies include ESLint, Vite plugins, TypeScript types, and Tailwind

## Technical Constraints
- Browser compatibility for WebContainer API
- CORS and security headers for cross-origin communication
- WebSocket connection limitations
- AI model response constraints (Gemini 2.0 Flash model)
- MongoDB and Redis connectivity requirements
- Azure deployment constraints

## Build Process
- Frontend: `npm run build` using Vite
- Backend: Standard Node.js build process
- Environment-specific configurations for development and production
- Azure deployment configuration via staticwebapp.config.json

## Deployment Strategy
- Frontend deployed on Azure Static Web Apps
- Backend deployed on Azure App Service
- Environment variables managed through Azure configuration
- CORS configured for production environment
- WebSocket connections secured in production

## Testing Approach
- Manual testing of features
- Component-level testing for React
- API endpoint testing
- WebSocket communication testing
- AI integration testing

## Performance Considerations
- Optimized React components with proper state management
- Efficient Socket.IO connections
- MongoDB query optimization
- Redis caching for frequently accessed data
- Efficient file tree handling for project structure
- AI response handling and processing 
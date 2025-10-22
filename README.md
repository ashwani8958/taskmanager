# taskmanager — Fullstack Task Manager

Lightweight task manager with a Node/Express + MongoDB backend and a React (Vite) frontend.

Quick pointers
- Backend entry: [backend/index.js](backend/index.js)
- Frontend entry: [frontend/src/main.jsx](frontend/src/main.jsx)
- Frontend UI components:
  - [`TaskManager`](frontend/src/components/TaskManager.jsx)
  - [`TaskModal`](frontend/src/components/TaskModal.jsx)
  - [`TaskTable`](frontend/src/components/TaskTable.jsx)

Prerequisites
- Node.js (v16+ recommended)
- A package manager: pnpm, npm or yarn
- MongoDB connection (local or Atlas)

Quickstart (two terminals)
1. Start the backend:
   - cd backend
   - install deps with your package manager (e.g. `pnpm install` or `npm install`)
   - ensure [backend/.env](backend/.env) contains your DB and HOST/PORT settings
   - run: `node index.js` (or `npm start` if a start script exists)
   - backend serves the API endpoints defined in [backend/routes/task.routes.js](backend/routes/task.routes.js)

2. Start the frontend:
   - cd frontend
   - install deps (e.g. `pnpm install` or `npm install`)
   - run the dev server, e.g. `pnpm dev` or `npm run dev` (Vite)
   - the frontend mounts at the Vite dev URL (default: `http://localhost:5173`)

Where to look
- API endpoints & routing: [backend/routes/task.routes.js](backend/routes/task.routes.js)
- Request handling: [backend/controllers/task.controller.js](backend/controllers/task.controller.js) (functions: [`getTask`](backend/controllers/task.controller.js), [`createTask`](backend/controllers/task.controller.js), [`updateTask`](backend/controllers/task.controller.js), [`deleteTask`](backend/controllers/task.controller.js))
- Data model: [`Task`](backend/models/task.model.js)
- Multer memory file upload: [backend/config/multerConfig.js](backend/config/multerConfig.js)
- Frontend axios calls and logic: [`TaskManager`](frontend/src/components/TaskManager.jsx)

License
- See [LICENSE](LICENSE)
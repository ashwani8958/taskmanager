# backend

Express + Mongoose backend for taskmanager.

Overview
- Entry point: [backend/index.js](backend/index.js)
- Routes: [backend/routes/task.routes.js](backend/routes/task.routes.js)
- Controllers: [backend/controllers/task.controller.js](backend/controllers/task.controller.js) — exposes [`getTask`](backend/controllers/task.controller.js), [`createTask`](backend/controllers/task.controller.js), [`updateTask`](backend/controllers/task.controller.js), [`deleteTask`](backend/controllers/task.controller.js)
- Service layer: [`TaskService`](backend/services/task.service.js)
- Model: [`Task`](backend/models/task.model.js)
- File uploads stored in memory via [backend/config/multerConfig.js](backend/config/multerConfig.js)

Environment
Create or edit [backend/.env](backend/.env) with:
- PORT — server port
- HOST — server host (e.g. `localhost`)
- MONGO_LOCAL_URI or MONGO_ATLAS_URI — connection string
- MONGO_DB_NAME — (optional) DB name override

API (HTTP)
- GET /tasks  -> handled by [`getTask`](backend/controllers/task.controller.js)
- POST /tasks (multipart/form-data; file field name: `pdf`) -> [`createTask`](backend/controllers/task.controller.js)
- PATCH /tasks/:id -> [`updateTask`](backend/controllers/task.controller.js)
- DELETE /tasks/:id -> [`deleteTask`](backend/controllers/task.controller.js)

Run
1. cd backend
2. install deps: `pnpm install` or `npm install`
3. run: `node index.js` (or `npm start` if script provided)

Notes
- File upload uses multer memory storage; uploaded file buffer is attached to the Task document as `linkedFile`.
- Database connection is established in [backend/index.js](backend/index.js) using env vars.
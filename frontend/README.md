# frontend

React (Vite) frontend for taskmanager.

Key files
- App entry: [frontend/src/main.jsx](frontend/src/main.jsx)
- Main components:
  - [`TaskManager`](frontend/src/components/TaskManager.jsx) — fetches tasks and issues API calls (axios calls to `http://localhost:8090/tasks`)
  - [`TaskModal`](frontend/src/components/TaskModal.jsx) — task form + PDF file input (uses FormData)
  - [`TaskTable`](frontend/src/components/TaskTable.jsx) — renders tasks and download/edit/delete actions
- Vite config: [frontend/vite.config.js](frontend/vite.config.js)

Run (development)
1. cd frontend
2. install deps: `pnpm install` or `npm install`
3. run dev server: `pnpm dev` or `npm run dev`
4. open the Vite URL (default: `http://localhost:5173`)

Notes
- The frontend expects the backend API at `http://localhost:8090/tasks` as used in [`TaskManager`](frontend/src/components/TaskManager.jsx).
- File uploads are sent as multipart FormData from the modal; downloads are handled by creating a Blob and an object URL in the browser.
- Styling is in [frontend/src/index.css](frontend/src/index.css) and [frontend/src/App.css](frontend/src/App.css).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

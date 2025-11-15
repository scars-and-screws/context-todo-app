# 📝 Context Todo App

Modern, context-driven Todo manager built with React + Vite and styled with Tailwind-friendly utility classes.

> Stay organized with a clean UI, keyboard-friendly editing, and persistent storage baked in by default.

![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=222222)
![Vite](https://img.shields.io/badge/Vite-6.3-646cff?style=flat-square&logo=vite&logoColor=222222)

### Live Demo 🤸‍♂️:

```bash
https://context-todo-app.netlify.app
```

## ✨ Features at a Glance

- ➕ **Add Todos** – Create new items with instant feedback and validation for empty entries.
- 📝 **Inline Editing** – Toggle edit mode, auto-focuses the input, and saves on Enter or via the save icon.
- ✅ **Completion Tracking** – Mark items done with preserved history using the Context API.
- ♻️ **Local Persistence** – Automatically syncs with `localStorage` so your list survives reloads.
- 🎯 **UX Enhancements** – Hidden controls while editing, subtle visual cues, and caret snapped to the end for faster updates.

## 🧩 Tech Stack

- React 19 with hooks + Context API for state management
- Vite 6 for lightning-fast dev/build tooling
- Tailwind-friendly utility classes (no full Tailwind config required)
- ESLint 9 for linting
- Netlify (recommended) for zero-config deployment

## 🗂️ Project Structure

```
context-todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── contexts/
│   │   └── TodoContext.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/scars-and-screws/context-todo-app.git
cd context-todo-app
npm install
```

### Local Development

```bash
npm run dev
```

- Runs Vite in dev mode with HMR at `http://localhost:5173` (or next available port).

### Production Build

```bash
npm run build
npm run preview   # optional: serves the dist build locally
```

## 🌐 Deploying to Netlify

1. Run `npm run build` to generate the latest `dist/` artifacts.
2. Drag-and-drop the `dist` folder into Netlify, or connect the GitHub repo and set the build command to `npm run build` with `dist` as the publish directory.
3. Update the **Live Demo** link above with the assigned Netlify URL (e.g., `https://your-subdomain.netlify.app`).

## 🔍 Functional Highlights

- **State via Context Provider** – `TodoProvider` exposes CRUD actions (`addTodo`, `updateTodo`, `removeTodo`, `toggleComplete`).
- **LocalStorage Sync** – Todos hydrate on load and persist on every change for a native-app feel.
- **Keyboard-Friendly Editing** – Press `Enter` to save edits, with the caret auto-jumping to the end of the text.
- **Clutter-Free UI** – While editing, completion/delete controls hide to keep the field focused.

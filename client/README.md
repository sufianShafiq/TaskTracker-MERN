# TaskTracker Frontend

This directory contains the React frontend for **TaskTracker**, a simple task management application built with the MERN stack.

The frontend is created without using `create-react-app` in this template due to network restrictions in the development environment. Instead, the necessary configuration is provided manually in `package.json` along with a minimal source structure.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)

Before running the client locally, ensure the backend server is running (see the `server` directory) and that your API base URL is correctly configured (default is `http://localhost:5000/api/tasks`).

## Setup

1. Navigate into the `client` directory:

   ```bash
   cd client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

This will start the React development server on `http://localhost:3000`. The app will automatically reload if you make edits to the source files.

## Environment Variables

If you need to point the frontend to a different backend API (for example, when deploying), create a `.env` file in this directory and set the `REACT_APP_API_BASE_URL` variable. For instance:

```bash
REACT_APP_API_BASE_URL=https://my-deployed-api.com/api/tasks
```

## Folder Structure

```
client
├── public
│   └── index.html         # HTML template
├── src
│   ├── App.js             # Root React component
│   ├── App.css            # Global styles
│   ├── index.js           # Entry point for React
│   └── components         # Reusable React components
│       ├── TaskForm.js    # Form to add tasks
│       └── TaskList.js    # List to display tasks
└── package.json           # Project metadata and scripts
```

---

This frontend is part of the **TaskTracker** MERN project. See the root [`README.md`](../README.md) for instructions on running the entire stack.
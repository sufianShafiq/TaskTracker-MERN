# TaskTracker – A MERN Stack Project

**TaskTracker** is a full‑stack web application for creating and managing tasks. Built with MongoDB, Express, React, and Node.js (the MERN stack), it demonstrates how to stitch together a backend API with a responsive frontend interface.

This repository is organised into two directories:

- **`server`** – Contains the Express/Mongoose backend for CRUD operations on tasks.
- **`client`** – Contains the React frontend for interacting with the API.

The project is intentionally named and structured to go beyond a trivial “sample app.” It includes clear separation of concerns, documentation and environment configuration to help you get started quickly.

## Getting Started

Below are the high‑level steps to run TaskTracker locally. For detailed setup instructions for each part, refer to the `README.md` files in the respective directories.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) installed and running locally, or a MongoDB connection string from a hosting provider (e.g., Atlas)

### Clone and Prepare

```bash
# Clone the repository (if you haven't already)
git clone <repo-url>
cd task-tracker

# Install backend dependencies
cd server
npm install
cp .env.example .env  # adjust variables as needed

# Install frontend dependencies
cd ../client
npm install
```

### Running the Application

Start the MongoDB server if it isn’t already running. Then, in separate terminal windows/tabs, run the backend and frontend:

```bash
# Start the backend server
cd server
npm start

# Start the frontend
cd ../client
npm start
```

The backend will listen on `http://localhost:5000` by default, and the frontend will run on `http://localhost:3000`. The React app proxies API requests to the backend; when you add, update or delete tasks from the web interface, the Express server will handle the requests and persist data to MongoDB.

## Project Highlights

- **Proper naming:** Unlike boilerplate “example” projects, this app has been given a meaningful name (TaskTracker) and a basic feature set you can extend.
- **RESTful API:** The backend exposes endpoints for creating, reading, updating and deleting tasks. See `server/README.md` for details.
- **React hooks:** The frontend uses modern React features like hooks (`useState`, `useEffect`) for state management.
- **Stateful UI:** Tasks are fetched from the API and displayed in a responsive list; you can add new tasks, mark them complete or delete them.
- **Configuration:** Example `.env` files show how to customise your MongoDB connection string and other variables.
- **Documentation:** Each part of the stack includes a `README.md` to guide you through installation and usage.

## Next Steps

TaskTracker provides a foundation you can build upon. Here are some ideas for extending it:

- Add authentication so each user has their own tasks.
- Add due dates or priorities to tasks and visualise them with different colours or lists.
- Write tests for the API and React components.
- Deploy the app to a cloud provider (e.g., Heroku for the backend and Vercel for the frontend).

Feel free to customise and extend the app to suit your needs!
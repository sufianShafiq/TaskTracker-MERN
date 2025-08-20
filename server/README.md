# TaskTracker Backend

This directory contains the backend server for **TaskTracker**, a simple task management application built with the MERN stack (MongoDB, Express, React, Node.js).

The server exposes a RESTful API for creating, reading, updating and deleting tasks. Tasks are persisted in a MongoDB database via Mongoose.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible via a connection string)

> **Note**: In this project template, the dependencies (Express, Mongoose, etc.) are declared in `package.json` but are not installed due to network restrictions in the development environment. Before running the server locally, run `npm install` in this directory to install the required packages.

## Setup

1. Navigate into the `server` directory:

   ```bash
   cd server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Copy the provided `.env.example` file to `.env` and adjust the variables as needed. At a minimum, you should specify your MongoDB connection string and the port for the server to listen on:

   ```bash
   cp .env.example .env
   # then edit .env to match your environment
   ```

4. Start the development server using [nodemon](https://github.com/remy/nodemon) (you may need to install nodemon globally):

   ```bash
   npm install -g nodemon  # optional
   npm run dev
   ```

   Alternatively, run the server normally:

   ```bash
   npm start
   ```

The API will be available at `http://localhost:<PORT>` (default `http://localhost:5000`).

## API Endpoints

| Method | Endpoint             | Description                |
|-------:|----------------------|----------------------------|
|  GET   | `/api/tasks`         | Retrieve all tasks        |
|  POST  | `/api/tasks`         | Create a new task          |
|  GET   | `/api/tasks/:id`     | Get a single task by ID    |
|  PUT   | `/api/tasks/:id`     | Update a task by ID        |
| DELETE | `/api/tasks/:id`     | Delete a task by ID        |

Each task document has the following shape:

```json
{
  "_id": "ObjectId",
  "title": "string",
  "description": "string",
  "completed": false,
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

## Folder Structure

```
server
├── index.js          # Main entry point for the Express server
├── models
│   └── Task.js       # Mongoose schema for tasks
├── routes
│   └── tasks.js      # Routes for task CRUD operations
├── .env.example      # Example environment variables file
└── package.json      # Node.js project metadata and dependencies
```

---

This backend is part of the **TaskTracker** MERN project. See the root [`README.md`](../README.md) for instructions on how to run both the client and server together.
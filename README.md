# TaskTracker – A MERN Stack Project

**TaskTracker** is a full-stack web application for creating and managing tasks.  
It is built with **MongoDB, Express, React, and Node.js (MERN stack)** and demonstrates how to connect a backend API with a responsive frontend.

---

## 🚀 Features
- Add, edit, and delete tasks  
- View task list in real-time  
- RESTful API with Express and MongoDB  
- React frontend with reusable components  
- Environment-based configuration  

---

## 📂 Project Structure
```
task-tracker/
│── client/       # React frontend
│   ├── src/
│   │   ├── components/   # TaskForm, TaskList
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
│── server/       # Node.js + Express backend
│   ├── routes/   # Task routes
│   ├── models/   # Mongoose models
│   ├── index.js  # App entry
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sufianShafiq/task-tracker.git
cd task-tracker
```

### 2️⃣ Install dependencies

#### Backend (server)
```bash
cd server
npm install
```

#### Frontend (client)
```bash
cd ../client
npm install
```

### 3️⃣ Configure environment
Create a `.env` file in `/server` (you can copy from `.env.example`):
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/tasktracker
PORT=5000
```

### 4️⃣ Run the project

#### Start backend
```bash
cd server
npm start
```

#### Start frontend
```bash
cd client
npm start
```

### 5️⃣ Access the app
Open in browser:  
👉 `http://localhost:3000`

---

## 🛠️ Tech Stack
- **Frontend**: React, Axios, CSS  
- **Backend**: Node.js, Express.js, Mongoose  
- **Database**: MongoDB (Atlas or Local)  

---

## 📌 Scripts
From the root folders:

**Client**:
- `npm start` – Run React app  
- `npm run build` – Build for production  

**Server**:
- `npm start` – Start backend  
- `npm run dev` – Start backend with nodemon  

---

## 📖 License
This project is open-source and available under the MIT License.  

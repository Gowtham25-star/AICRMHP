```md
# AI CRM HCP Project

## Project Overview

AI CRM HCP (Healthcare Professional Customer Relationship Management) is a full-stack web application designed to manage healthcare professional information, meetings, and medical discussions efficiently.

The main purpose of this project is to help users store doctor details, schedule meetings, maintain meeting summaries, and organize healthcare-related interactions in one place.

This project uses modern full-stack technologies with an AI-based approach for better data management and automation.

---

# Features

## User Management
- User registration and login system
- Secure authentication
- Manage user access

## Healthcare Professional (HCP) Management
- Add doctor details
- View doctor information
- Update and manage healthcare professionals

## Meeting Management
- Schedule meetings with doctors
- Store meeting date and time
- Select meeting type (Online/Offline)
- Add discussion topics
- Maintain meeting summaries

## AI Features
- AI-based summary generation
- Automatic analysis of meeting discussions
- Helps users maintain structured records

---

# Technologies Used

## Frontend
- React.js
- Vite
- JavaScript
- HTML
- CSS
- Redux Toolkit

React is used to build the user interface and create reusable components.

---

## Backend
- Python
- FastAPI

FastAPI is used to create REST APIs and handle communication between frontend and backend.

---

## Database
- PostgreSQL

PostgreSQL is used to store user details, doctor information, and meeting records.

---

## Tools Used

### Visual Studio Code
Used for writing and managing project code.

### Git and GitHub
Used for version control and project management.

### Postman
Used for testing backend APIs.

### PostgreSQL Database
Used for storing application data.

---

# Project Structure

```

AI_CRM_HCP

│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   └── App.jsx
│   │
│   └── package.json
│
│
├── backend
│   ├── main.py
│   ├── models
│   ├── routes
│   ├── database
│   └── requirements.txt
│
└── README.md

```

---

# Installation and Setup

## Step 1: Clone the Repository

Download or clone the project from GitHub.

```

git clone <repository-url>

```

Open the project folder in Visual Studio Code.

---

# Backend Setup

## Step 2: Open Backend Folder

```

cd backend

```

Create a virtual environment:

```

python -m venv venv

```

Activate virtual environment:

For Windows:

```

venv\Scripts\activate

```

Install required packages:

```

pip install -r requirements.txt

```

---

## Step 3: Run Backend Server

Start FastAPI server:

```

uvicorn main:app --reload

```

Backend will run on:

```

[http://127.0.0.1:8000](http://127.0.0.1:8000)

```

API documentation:

```

[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

```

---

# Frontend Setup

## Step 4: Open Frontend Folder

Open another terminal:

```

cd frontend

```

Install dependencies:

```

npm install

```

---

## Step 5: Start React Application

Run:

```

npm run dev

```

Frontend will start on:

```

[http://localhost:5173](http://localhost:5173)

```

---

# Database Setup

1. Install PostgreSQL
2. Create a database
3. Update database connection details
4. Run backend server

The application will automatically connect with PostgreSQL.

---

# API Testing

You can test APIs using Postman.

Example APIs:

### User Login

```

POST /login

```

### Add HCP Doctor

```

POST /hcp

```

### Create Meeting

```

POST /meetings

```

### Get Meetings

```

GET /meetings

```

---

# How the Application Works

1. User opens the application.
2. User logs into the system.
3. User can add healthcare professionals.
4. User schedules meetings.
5. Meeting details are stored in the database.
6. AI features help generate summaries and organize information.

---

# Learning Outcomes

By completing this project, we learned:

- Full-stack application development
- React frontend development
- API creation using FastAPI
- Database integration
- Authentication concepts
- REST API testing
- State management using Redux
- Real-world CRM application workflow

---

# Future Improvements

- Add advanced AI chatbot support
- Add notification system
- Add analytics dashboard
- Improve AI-generated reports
- Add role-based user permissions

---

# Conclusion

AI CRM HCP is a complete full-stack healthcare management application that demonstrates how frontend, backend, database, and AI technologies can work together to solve real-world problems.

This project provides practical experience in building scalable web applications and managing healthcare professional relationships efficiently.
```


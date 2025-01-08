# BASIC CRUD OPERATION USING MERN STACK

## Overview
Modern MERN stack application for  CRUD operations, authentication, and responsive design.

## 🚀 Features
- User Authentication
- Employee CRUD Operations
- Responsive Design
- Real-time Updates
- Search & Filter
- Dark/Light Mode

## 🛠️ Tech Stack
- MongoDB
- Express.js
- React + Vite
- Node.js
- Tailwind CSS

## ⚙️ Installation

1. Clone repository
```bash
git clone https://github.com/nikpatil2123/MERN-CRUD.git
cd MERN-CRUD
```
2. Install dependencies
```bash
# Root directory
npm install

# Client directory
cd client
npm install
```

## 🔧 Environment Setup
Create .env in server directory:

```bash
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
## 🏃‍♂️ Running the Application

```bash
# Development mode
npm run dev

# Server only
npm run server

# Client only
npm run client
```

## 📚 API Documentation
Auth Endpoints
```bash
POST /api/auth/register - Register new user
POST /api/auth/login    - User login
```

Employee Endpoints
```bash
GET    /api/employees     - Fetch all employees
POST   /api/employees     - Create employee
PUT    /api/employees/:id - Update employee
DELETE /api/employees/:id - Delete employee
```

## 👥 Contributing

1.Fork Repository
2.Create feature branch
```bash
git checkout -b feature/YourFeature
```
3.Commit Chnages 
```bash
git commit -m 'Add YourFeature'
```
4.Push to Branch
```bash
git push origin feature/YourFeature
```
5.Open Pull Request

## 👤 Author
NIKHIL VIJAY PATIL

## 💬 Support
Email: nikpatil2123@gmail.com



# EduTogether

<!-- recovery code D97ARBP1HGU9NZV9ZXMXVY94 -->

## 📌 Project Overview
EduTogether is a MERN stack web application designed to improve communication between parents and teachers. The platform enables seamless interactions, updates on student progress, and a collaborative environment for better education outcomes. This project aims to bridge the communication gap in the current education system (CBC).

## 🚀 Features
- 👨‍🏫 Teacher and Parent Authentication (Signup/Login)
- 📝 Announcements and Updates from Teachers
- 💬 Direct Messaging between Parents and Teachers
- 📅 Event and Meeting Scheduling
- 📊 Student Progress Tracking
- 📢 Notifications and Alerts

## 🛠 Tech Stack
**Frontend:** React.js, Vite, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT (JSON Web Tokens)  
**State Management:** React Context API / Redux (Optional)  

## 📂 Project Structure
```
EduTogether/
│-- client/       # Frontend (React, Vite, Tailwind CSS)
│-- server/       # Backend (Node.js, Express, MongoDB)
│-- models/       # Database Models
│-- routes/       # API Routes
│-- controllers/  # Business Logic
│-- config/       # Environment Configurations
│-- README.md     # Project Documentation
```

## 📦 Installation and Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/EduTogether.git
cd EduTogether
```

### 2️⃣ Install Dependencies
#### Frontend:
```sh
cd client
npm install
npm run dev
```
#### Backend:
```sh
cd server
npm install
npm start
```

### 3️⃣ Environment Variables
Create a `.env` file in the server directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## 🚀 Running the Project
Start the frontend and backend servers separately:
```sh
npm run dev    # Frontend
npm start      # Backend
```

## 📌 Future Enhancements
- 📱 Mobile-friendly UI Improvements
- 🎥 Video Conferencing for Virtual Meetings
- 📊 Advanced Student Performance Analytics




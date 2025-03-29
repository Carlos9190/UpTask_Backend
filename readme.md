# UpTask Backend

## 📌 Description
This is the backend for the **UpTask** project, a task management application developed with the **MERN stack** (*MongoDB, Express.js, React, and Node.js*). It provides a RESTful API for managing projects and tasks.

---

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Framework for building REST APIs
- **MongoDB & Mongoose** - NoSQL database and ODM
- **JSON Web Tokens (JWT)** - Secure authentication
- **Bcrypt** - Password encryption
- **Nodemailer** - Email sending service
- **TypeScript** - Static typing for JavaScript

---

## 🚀 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Carlos9190/UpTask_Backend.git
cd UpTask_Backend
```

### 2️⃣ Install dependencies
```bash
npm install  # or yarn install
```

### 3️⃣ Configure environment variables
Create a `.env` file in the project's root directory and define the following variables:
```env
# 🔗 Database connection
DATABASE_URL=mongodb://localhost:27017/uptask

# 🌐 Frontend URL in development
FRONTEND_URL=http://localhost:5173

# ✉️ SMTP email service configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# 🔑 Secret key for JSON Web Tokens
JWT_SECRET=your_super_secure_secret
```
---

## 📌 Usage

### 🔥 Start the Server
```bash
#  🚀 For Postman testing in local development:
npm run dev:api  # or yarn dev:api

#  🌍 For deployment or full application usage:
npm run dev # or yarn dev
```

### 🔗 Endpoints

📄 For complete documentation, check the **Postman** collection at [Uptask_Endpoints](https://documenter.getpostman.com/view/29810403/2sB2cPj5MA).

---

## 📦 Dependencies

### 📌 Main Dependencies
```json
{
  "bcrypt": "^5.1.1",
  "colors": "^1.4.0",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "express-validator": "^7.2.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.9.5",
  "morgan": "^1.10.0",
  "nodemailer": "^6.10.0"
}
```

### 🔧 Development Dependencies
```json
{
  "@types/bcrypt": "^5.0.2",
  "@types/cors": "^2.8.17",
  "@types/express": "^5.0.0",
  "@types/jsonwebtoken": "^9.0.8",
  "@types/morgan": "^1.9.9",
  "@types/nodemailer": "^6.4.17",
  "nodemon": "^3.1.9",
  "ts-node": "^10.9.2",
  "typescript": "^5.7.3"
}
```

---

## 🤝 Contributing

1️⃣ **Fork the repository**.

2️⃣ **Create a branch** for your new feature or fix:
   ```bash
   git checkout -b new-feature
   ```
3️⃣ **Make changes and commit them**:
   ```bash
   git commit -m "Add new feature"
   ```
4️⃣ **Submit a Pull Request** for review.

## 📬 Contact

Developed by **Carlos Ibarra**.

- GitHub: [Carlos9190](https://github.com/Carlos9190)
- Frontend Repository: [UpTask_Frontend](https://github.com/Carlos9190/UpTask_Frontend)

## 📘 TitanComputer Monorepo

A full-stack monorepo combining:

- **Frontend**: Angular + TypeScript  
- **Backend**: Express.js + TypeScript + JWT Authentication  
- Designed for scalability, modularity, and developer happiness.

---

## 📁 Project Structure

```
titancomputer/
├── apps/
│   ├── frontend/         # Angular application
│   └── backend/          # Express.js API with JWT
├── tsconfig.base.json    # Shared TypeScript config
├── package.json          # Root scripts and dependencies
├── .gitignore            # Global ignore rules
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/titancomputer.git
cd titancomputer
```

### 2. Install dependencies

```bash
npm install
```

> This installs root-level dev tools (e.g. `concurrently`) and prepares the monorepo.

### 3. Install frontend and backend dependencies

```bash
cd apps/frontend && npm install
cd ../backend && npm install
```

---

## 🧪 Development

### Start both frontend and backend

```bash
npm run start
```

> This runs Angular on `http://localhost:4200` and Express API on `http://localhost:3000`.

---

## 🔐 JWT Authentication (Backend)

### Login Endpoint

```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "jan",
  "password": "tajnehaslo"
}
```

Returns:

```json
{
  "token": "your-jwt-token"
}
```

### Protected Route

```http
GET /api/auth/protected
Authorization: Bearer <your-jwt-token>
```

Returns:

```json
{
  "message": "You have access to protected data!"
}
```

---

## 📘 API Documentation

ReDoc is available at:

```
GET /docs
```

> Serves interactive OpenAPI documentation based on `swagger.json`.

---

## 🧰 Scripts

```json
"scripts": {
  "start:frontend": "cd apps/frontend && ng serve",
  "start:backend": "cd apps/backend && ts-node src/index.ts",
  "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\""
}
```

---

## 🧠 Tech Stack

- Angular 17+
- Express.js
- TypeScript
- JWT (jsonwebtoken)
- bcryptjs
- ReDoc (OpenAPI docs)
- nodemon + ts-node (dev backend)

---

## 📦 Future Improvements

- MongoDB integration
- User registration
- Refresh tokens
- Docker support
- CI/CD pipeline

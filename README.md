# 📝 Task Manager REST API

A simple **Task Manager REST API** built using **Node.js** and **Express.js**. This project demonstrates the fundamentals of building RESTful APIs, including CRUD operations, request validation, error handling, and testing with Postman. Data is stored in memory, making it ideal for beginners learning backend development.

---

## 🚀 Features

* Create a new task
* Retrieve all tasks
* Retrieve a task by ID
* Update an existing task
* Delete a task
* Input validation
* Error handling
* In-memory data storage (No Database)
* Test API using Postman or cURL

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Postman (API Testing)

---

## 📂 Project Structure

```text
task-manager/
│
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/task-manager.git
```

### 2. Navigate to the project folder

```bash
cd task-manager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node index.js
```

Server starts at:

```text
http://localhost:8090
```

---

# 📌 API Endpoints

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/`              | Welcome Route  |
| GET    | `/api/tasks`     | Get all tasks  |
| GET    | `/api/tasks/:id` | Get task by ID |
| POST   | `/api/tasks`     | Create a task  |
| PUT    | `/api/tasks/:id` | Update a task  |
| DELETE | `/api/tasks/:id` | Delete a task  |

---

# 📖 API Usage

## Home Route

### Request

```http
GET /
```

### Response

```text
Task Manager API is Running!
```

---

## Create Task

### Request

```http
POST /api/tasks
```

### Body

```json
{
    "title": "Learn Node.js"
}
```

### Response

```json
{
    "id": 1,
    "title": "Learn Node.js",
    "completed": false
}
```

---

## Get All Tasks

### Request

```http
GET /api/tasks
```

### Response

```json
[
    {
        "id": 1,
        "title": "Learn Node.js",
        "completed": false
    }
]
```

---

## Get Task by ID

### Request

```http
GET /api/tasks/1
```

### Response

```json
{
    "id": 1,
    "title": "Learn Node.js",
    "completed": false
}
```

---

## Update Task

### Request

```http
PUT /api/tasks/1
```

### Body

```json
{
    "title": "Learn Express.js",
    "completed": true
}
```

### Response

```json
{
    "id": 1,
    "title": "Learn Express.js",
    "completed": true
}
```

---

## Delete Task

### Request

```http
DELETE /api/tasks/1
```

### Response

```json
{
    "message": "Task deleted successfully"
}
```

---

# ❌ Error Handling

## Missing Title

### Request

```http
POST /api/tasks
```

```json
{}
```

### Response

```json
{
    "message": "Title is required"
}
```

---

## Task Not Found

### Request

```http
GET /api/tasks/100
```

### Response

```json
{
    "message": "Task not found"
}
```

---

# 🧪 Testing with Postman

## Import the API

Open **Postman** and create a new collection named **Task Manager API**.

Create the following requests:

### 1. Get All Tasks

* Method: `GET`
* URL:

```text
http://localhost:8090/api/tasks
```

---

### 2. Create Task

* Method: `POST`
* URL:

```text
http://localhost:8090/api/tasks
```

Headers:

```text
Content-Type: application/json
```

Body → Raw → JSON

```json
{
    "title": "Learn Express.js"
}
```

---

### 3. Get Task by ID

* Method: `GET`

```text
http://localhost:8090/api/tasks/1
```

---

### 4. Update Task

* Method: `PUT`

```text
http://localhost:8090/api/tasks/1
```

Body

```json
{
    "title": "Updated Task",
    "completed": true
}
```

---

### 5. Delete Task

* Method: `DELETE`

```text
http://localhost:8090/api/tasks/1
```

---

# 🖥️ Testing with cURL

## Create Task

```bash
curl -X POST http://localhost:8090/api/tasks \
-H "Content-Type: application/json" \
-d "{\"title\":\"Learn Express\"}"
```

---

## Get All Tasks

```bash
curl http://localhost:8090/api/tasks
```

---

## Update Task

```bash
curl -X PUT http://localhost:8090/api/tasks/1 \
-H "Content-Type: application/json" \
-d "{\"title\":\"Updated Task\",\"completed\":true}"
```

---

## Delete Task

```bash
curl -X DELETE http://localhost:8090/api/tasks/1
```

---

# 📚 Concepts Learned

* REST API Fundamentals
* Express.js Routing
* CRUD Operations
* Middleware (`express.json()`)
* Route Parameters
* Request Body Handling
* JSON Responses
* HTTP Status Codes
* Input Validation
* Error Handling
* API Testing with Postman
* In-Memory Data Storage

---

# 🔮 Future Improvements

* MongoDB Integration
* User Authentication (JWT)
* Persistent Data Storage
* Pagination
* Search and Filtering
* Task Categories
* Due Dates
* Authentication & Authorization
* Docker Support
* Unit Testing

Built as a beginner-friendly Node.js project to learn Express.js and REST API development.

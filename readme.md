# Redis — Practical Learning & Hands-on Projects

A hands-on Redis learning repository focused on understanding Redis fundamentals and implementing real-world backend use cases using Node.js, Express.js, Docker, and Redis.

This repository contains practical exercises, experiments, and mini-projects designed to explore Redis data structures, caching strategies, key expiration, and authentication workflows.

## 🚀 Tech Stack

- **Redis** – In-memory data store and caching.
- **Node.js** – JavaScript runtime.
- **Express.js** – Backend API development.
- **ioredis** – Redis client for Node.js.
- **Docker & Docker Compose** – Redis container management.
- **MongoDB & Mongoose** – Database integration experiments.

## 📂 Repository Structure

```text
Redis/
│
├── 02-setup-local-redis/
│   └── Local Redis setup using Docker
│
├── 03-site-banner/
│   └── Redis-based site banner implementation
│
├── 04-login-otp-with-ttl/
│   └── OTP authentication with automatic expiration
│
├── 05-user-profile-cache-json-vs-hash/
│   └── Comparing JSON strings and Redis Hashes
│
├── docker-compose.yml
└── README.md
```

## 📚 Learning Modules

### 1. Local Redis Setup
- Setting up Redis locally using Docker.
- Understanding Docker containers and images.
- Connecting Node.js applications to Redis.
- Testing Redis connectivity using `PING`.

### 2. Site Banner Management
- Implementing Redis-based site banner functionality.
- Understanding Redis key-value storage.
- Managing temporary application data.

### 3. Login OTP with TTL
- Generating OTPs using Node.js.
- Storing OTPs in Redis.
- Implementing automatic key expiration using `EX`.
- Checking remaining expiration time using `TTL`.
- Verifying OTPs using `GET`.
- Deleting OTPs after successful verification using `DEL`.

### 4. User Profile Cache: JSON vs Hash
- Storing objects as JSON strings using `SET`.
- Serializing and deserializing JSON using `JSON.stringify()` and `JSON.parse()`.
- Storing structured data using Redis Hashes.
- Using `HSET` and `HGETALL`.
- Understanding the differences between Redis Strings and Hashes.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Docker Desktop
- Git

### 1. Clone the repository

```bash
git clone https://github.com/techiAlok/Redis.git
```

### 2. Navigate to the project

```bash
cd Redis
```

### 3. Start Redis using Docker Compose

```bash
docker compose up -d
```

### 4. Verify Redis is running

```bash
docker ps
```

Connect to Redis CLI:

```bash
docker exec -it <container_name> redis-cli
```

Test the connection:

```redis
PING
```

Expected output:

```text
PONG
```

### 5. Run an individual Node.js module

Navigate to the desired module:

```bash
cd "04 login-otp-with-ttl"
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

*Note: Follow the individual module's configuration and environment requirements.*

## 🧠 Redis Commands Practiced

| Command | Purpose |
|---|---|
| `SET` | Store a key-value pair |
| `GET` | Retrieve a value |
| `DEL` | Delete a key |
| `EXPIRE` | Set key expiration |
| `TTL` | Check remaining key lifetime |
| `EXISTS` | Check whether a key exists |
| `HSET` | Store hash fields |
| `HGET` | Retrieve a hash field |
| `HGETALL` | Retrieve all hash fields |
| `INCR` | Increment a numeric value |
| `PING` | Test Redis connectivity |

## 🎯 Learning Objectives

- Understand Redis architecture and in-memory data storage.
- Work with Redis data structures.
- Implement caching in backend applications.
- Understand TTL and key expiration.
- Explore authentication-related use cases.
- Compare different Redis storage strategies.
- Integrate Redis with Node.js and Express.js.
- Use Docker for local development environments.

## 📈 Progress

This repository is continuously evolving as I explore Redis concepts and implement practical backend use cases.

More experiments and real-world implementations will be added as I progress.

## 👨‍💻 Author

**Alok Singh**

- GitHub: [@techiAlok](https://github.com/techiAlok)

---

⭐ If you find this repository useful, consider giving it a star!

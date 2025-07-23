# ScriptedRealms

**ScriptedRealms** is a campaign management and character tracking tool for tabletop RPGs, built with Java and Spring Boot. It helps Dungeon Masters and players manage characters, spells, inventories, and conditions in a structured and extensible environment.

---

## Features

- ✅ Spring Boot backend with RESTful API
- ✅ PostgreSQL integration (supports Neon or local Docker database)
- ✅ JPA/Hibernate entity models for RPG mechanics (characters, items, spells, conditions)
- ✅ Docker and Docker Compose support for easy deployment
- ✅ Firebase-ready authentication layer (planned)
- ✅ Full unit testing support with JUnit (in progress)

---

## Tech Stack

- **Java 17**
- **Spring Boot 3**
- **Hibernate / JPA**
- **PostgreSQL**
- **Docker & Docker Compose**
- **Neon (hosted DB) or local PostgreSQL**
- **Firebase Authentication** (coming soon)

---

## Project Structure

```
/backend
  ├── Dockerfile
  ├── src/main/java/com/scriptedrealms
  ├── model/        → JPA entities (Character, Spell, etc.)
  ├── repository/   → Spring Data JPA interfaces
  ├── controller/   → REST API endpoints (planned)
  └── Application.java
/docker-compose.yml
/.env                 → Your DB credentials (do not commit this)
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Brightchr/ScriptedRealms.git
cd ScriptedRealms
```

---

### 2. Environment Variables

Create a `.env` file in the project root:

```
DB_URL=jdbc:postgresql://<your-neon-or-docker-db-url>
DB_USERNAME=<your-username>
DB_PASSWORD=<your-password>
```

---

### 3. Run with Docker Compose

```bash
docker compose up --build
```

This will:
- Build the Spring Boot backend
- Start a PostgreSQL database (or connect to Neon)
- Automatically create tables using `spring.jpa.hibernate.ddl-auto=update`

---

## Running Tests

(Coming soon)

```bash
./gradlew test
```

---

## Roadmap

- [ ] RESTful API controllers
- [ ] Firebase authentication integration
- [ ] User interface frontend (React or Vue)
- [ ] Session management & role-based access
- [ ] Game logic engine for turn-based management

---

## Security

- Database credentials are injected via environment variables.
- `.env` is **excluded** from version control.
- Plans to integrate Firebase Auth token validation in backend.

---

## License

MIT License — feel free to fork, extend, and play!

---

## Author

**Christopher Bright**  
Creator of ScriptedRealms  

# Docker Demo Application Dicumentation

## Application Description

This is a containerized application managed using Docker Compose. It consists of multiple services working together (e.g., a frontend and backend).

The application exposes a web interface accessible via your browser at: <http://localhost:5173>

---

## Deployment Requirements

To deploy and run this application, make sure the following software is installed on your system:

- [Docker](https://docs.docker.com/get-docker/) (v20+ recommended)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2+ or integrated Compose in Docker Desktop)
- Unix/Linux shell or Git Bash (for `.sh` scripts)

---

## Application Architecture

### Container List

| Container Name | Role/Service        | Description                          |
|----------------|---------------------|--------------------------------------|
| `assigment1vc_client_1`          | Frontend App | Hosts the main application interface |
| `assigment1vc_server_1`           | Backend Server         | Run the application api on server side |

---

### Network Details

- **`web-app:`**: A user-defined bridge network that allows containers to communicate.

---

## Container Configuration

Guidence for configurations:

### `Client` Service

```yaml
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

- `FROM node:latest` : Uses official image (pull latest node official image).
- `COPY package*.json ./` : Copy the packages and dependencies to the frontend image.
- `RUN npm install` : install the node packages inside docker image.
- `COPY . .` : Copy the all file to the docker image
- `EXPOSE 5173` : Exposes port for host.
- `CMD ["npm", "run", "dev"]` : Finally, execute the application in the container.

### `Server` Service

```yaml
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
```

- `FROM node:latest` : Uses official image (pull latest node official image).
- `COPY package*.json ./` : Copy the packages and dependencies to the frontend image.
- `RUN npm install` : install the node packages inside docker image.
- `COPY . .` : Copy the all file to the docker image
- `EXPOSE 3000` : Exposes port for host.
- `CMD ["npm", "run", "start"]` : Finally, execute the application in the container.

---

## Instructions

All application lifecycle operations are scripted. Use the provided `.sh` scripts:

### 1. Prepare the Application

```bash
./prepare-app.sh

echo ">>> Prepare application environment"
docker-compose build
```

### 2. Run the application

```bash
./start-app.sh

echo ">>> Start application"
docker-compose up -d
echo ">>> The app is available at http://localhost:5173"

docker-compose logs
```

### 3. Stop the application

```bash
./stop-app.sh

echo ">>> Stop application"
docker-compose stop
```

### 4. Delete all application resources

```bash
./remove-app.sh

echo ">>> Remove application"
docker-compose down --volumes --remove-orphans
```

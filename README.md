# 🚀 TaskFlow – Team & Task Management System
Taskflow or jira-lite is a full-stack project management system inspired by Jira/Trello, built with .NET Core, React, and PostgreSQL. It allows teams to create projects, assign tasks, track progress on a Kanban board, and collaborate in real-time. 

This project is being built **from scratch** with a modern tech stack to demonstrate **production-ready engineering practices**.

![GitHub repo size](https://img.shields.io/github/repo-size/punz321/jira-lite?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/punz321/jira-lite?color=green)
![WIP](https://img.shields.io/badge/status-WIP-orange)

## 🛠️ Tech Stack

### Backend
- **.NET 8 (ASP.NET Core Web API)**
- **Entity Framework Core** (PostgreSQL ORM)
- **JWT Authentication + ASP.NET Identity**
- **SignalR** (real-time updates)

### Frontend
- **React + TypeScript**
- **Tailwind CSS**
- **React Beautiful DnD** (drag-and-drop Kanban board)

### Database
- **PostgreSQL**  
- **pgAdmin** (DB management)

### DevOps / Deployment
- **Docker & Docker Compose**
- **GitHub Actions (CI/CD)**
- **Azure App Service** (target deployment)

(Extra features like OAuth login, dark mode, Redis caching can come later)

## ⚡ Getting Started

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)  
- [Node.js LTS](https://nodejs.org/en/)  
- [PostgreSQL](https://www.postgresql.org/download/)  
- [Docker](https://www.docker.com/) (optional, later for containerization)

### Clone Repo
```bash
git clone https://github.com/punz321/jira-lite.git
cd jira-lite
```
### Run Backend
```bash
cd TaskFlow.API
dotnet restore
dotnet run
```
### Run Frontend
```bash
cd taskflow-frontend
npm install
npm start
```
## 📜License
MIT License - 2025
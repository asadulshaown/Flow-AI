# AI SaaS Project Management System

Full-stack AI SaaS Project Management Tool built with **Next.js 14**, **Tailwind CSS**, and **Django REST Framework**.

## Features Fixed & Implemented:
1. **Frontend (Next.js 14 + Tailwind CSS)**:
   - Root Layout & Modern Linear-styled UI navigation.
   - Fixed missing exports, routing, and component imports.
   - Pages included: `Dashboard`, `Tasks`, `Analytics`, `Team`, `AI Assistant`, `AI Suggestions`, `Login`, and `Register`.
   - REST API Integration Utility (`lib/api.ts`).

2. **Backend (Django REST Framework)**:
   - Custom User authentication model (`users.User`).
   - JWT Token Authentication (`rest_framework_simplejwt`).
   - AI Service API app (`ai_service`) with endpoints:
     - `POST /api/ai/assistant/`
     - `GET /api/ai/suggest/`
   - Initial database migrations included.

## How to Run locally:

### 1. Backend (Django)
```bash
cd backend
python -m venv venv
# On Windows: venv\Scripts\activate
# On Linux/Mac: source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 2. Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---
### Or using Docker Compose:
```bash
docker-compose up --build
```

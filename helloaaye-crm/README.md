# HelloAaye CRM

A modern, responsive SaaS landing page for a CRM product with a product inquiry system and admin dashboard.

## Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS, React Router DOM, Axios, React Icons, AOS
- **Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose
- **Deployment:** Frontend → Vercel, Backend → Render

## Project Structure

```
helloaaye-crm/
├── client/   # React frontend
└── server/   # Express backend
```

## Getting Started

### 1. Backend

```bash
cd server
cp .env.example .env   # fill in your MongoDB URI
npm install
npm run dev
```

Server runs on `http://localhost:5000`.

### 2. Frontend

```bash
cd client
cp .env.example .env    # set VITE_API_URL
npm install
npm run dev
```

Client runs on `http://localhost:5173`.

## API Endpoints

| Method | Endpoint            | Description             |
|--------|---------------------|--------------------------|
| POST   | `/api/inquiry`      | Create a new inquiry     |
| GET    | `/api/inquiry`      | Get all inquiries        |
| DELETE | `/api/inquiry/:id`  | Delete an inquiry by id  |

## Pages

- `/` — Landing page (Hero, Features, Pricing, Testimonials, FAQ, Contact/Inquiry form)
- `/dashboard` — Admin dashboard (stats, search, filter, delete inquiries)

## Deployment

- **Frontend (Vercel):** set root directory to `client`, build command `npm run build`, output `dist`, and set `VITE_API_URL` to your deployed backend URL.
- **Backend (Render):** set root directory to `server`, build command `npm install`, start command `npm start`, and set `MONGO_URI`, `PORT`, `CLIENT_URL` env vars.

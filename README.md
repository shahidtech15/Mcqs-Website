# MCQs Website Documentation

## Project Setup Instructions

### 1. Prerequisites
- Node.js installed
- MongoDB installed and running locally on port `27017`

### 2. Backend Setup
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies (already done if node_modules exists):
   ```bash
   npm install
   ```
3. Run the Database Seeder to populate initial data and create the admin account:
   ```bash
   node seed.js
   ```
   **Admin Credentials:**
   - **Username:** `admin`
   - **Password:** `admin123`

4. Start the backend server:
   ```bash
   npm start
   ```
   (Alternatively, `node server.js`). The server will run on `http://localhost:5000`.

### 3. Frontend Setup
1. You don't need to install any packages for the frontend since it uses Vanilla JS, HTML, and CSS.
2. Open the `frontend/index.html` file using your web browser, or serve the `frontend` folder using an extension like Visual Studio Code's "Live Server" for the best experience.

## Deployment Guide
1. **Backend:** Deploy the `backend` folder to Heroku, Render, or any Node.js hosting service. Make sure to set the environment variables:
   - `PORT`: (e.g. 5000)
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A long random secret key for signing admin tokens
   - `ADMIN_REGISTER_KEY`: Master secret key required to register new admin accounts via `/api/auth/register`
2. **Frontend:** Deploy the `frontend` folder to Vercel, Netlify, or GitHub Pages. 
3. **Important:** Update the `API_URL` constant in `frontend/js/app.js`, `frontend/js/quiz.js`, and `frontend/js/admin.js` to point to your live backend domain instead of `localhost:5000`.

### Security Note
- Admin API endpoints (`POST /api/questions`, `DELETE /api/questions/:id`, `POST /api/categories`, `DELETE /api/categories/:id`, `GET /api/quiz/attempts`) are protected via JWT authentication (`verifyToken`).
- The `/api/auth/register` endpoint is protected and requires an authorized admin token or the `adminKey` (`ADMIN_REGISTER_KEY`).

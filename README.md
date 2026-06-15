# Synapse - Second Brain Frontend

Synapse is a "second brain" web application designed for users to save, organize, and share digital content bookmarks (such as YouTube videos, tweets, articles, and documentation links).

This folder contains the frontend client application, built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## Table of Contents
- [Synapse - Second Brain Frontend](#synapse---second-brain-frontend)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Folder Structure](#folder-structure)
  - [Key Pages \& Routing](#key-pages--routing)
    - [1. Authentication Pages](#1-authentication-pages)
    - [2. Main Dashboard (`/dashboard`)](#2-main-dashboard-dashboard)
    - [3. Create Content Modal](#3-create-content-modal)
  - [Integration with Backend API](#integration-with-backend-api)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Environment Configuration](#environment-configuration)
    - [Installation](#installation)
    - [Running the Client](#running-the-client)

---

## Tech Stack
- **Framework**: React 19 (Single Page Application)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (with custom theme tokens)
- **Routing**: React Router v7
- **HTTP Client**: Axios (for communication with the backend API)

---

## Folder Structure

```text
SynapseFrontEnd/
├── src/
│   ├── assets/
│   │   └── icons/            # SVG custom icon components (TwitterIcon, YoutubeIcon, ShareIcon, etc.)
│   ├── components/
│   │   └── ui/               # Reusable UI components (Button, Input, Card, Sidebar, SidebarItem)
│   ├── hooks/
│   │   └── useContent.tsx    # Custom React hook to fetch saved content from backend
│   ├── pages/
│   │   ├── Signin.tsx        # User login page
│   │   ├── Signup.tsx        # User registration page
│   │   └── dashboard.tsx     # Main dashboard view displaying bookmarks
│   ├── App.css               # Global application styles
│   ├── App.tsx               # Client routes and layout wrapper
│   ├── index.css             # Tailwind v4 import and custom theme extensions
│   └── main.tsx              # React mounting and entrypoint
├── config.ts                 # Frontend configuration constants (Consumes BACKEND_URL)
├── package.json              # Client dependencies and run scripts
└── tsconfig.json             # TypeScript compiler configurations
```

---

## Key Pages & Routing

### 1. Authentication Pages
* **Signup (`/signup`)**
  - Collects username and password to register a new user profile.
  - Redirects to `/signin` upon successful creation.
* **Signin (`/signin`)**
  - Authenticates user credentials.
  - Stores the returned JWT in `localStorage` under the `"token"` key and redirects to `/dashboard`.

### 2. Main Dashboard (`/dashboard`)
* Displays all saved bookmarks inside a responsive **Masonry Layout** (Pinterest-style multi-columns), packing cards of varying heights tightly.
* Renders previews dynamically inside the card border:
  - **YouTube Content**: Embeds a native iframe video player (auto-converting standard URLs to correct embed parameters).
  - **Twitter Content**: Embeds interactive Twitter cards dynamically parsed and loaded via the Twitter widgets library.
* Contains a Sidebar navigation list for future categories and action buttons to share the dashboard or add links.

### 3. Create Content Modal
* Opened from the "Add content" action button.
* Allows users to input bookmark details (title, link) and choose the appropriate media type (YouTube or Twitter).

---

## Integration with Backend API

The frontend application communicates with the backend REST API using Axios:
1. **Token Authorization**: Protected requests send the JWT token directly in the `Authorization` header:
   ```typescript
   headers: {
     Authorization: localStorage.getItem("token")
   }
   ```
2. **Endpoints Consumed**:
   - `POST /api/v1/signup` (Signup page)
   - `POST /api/v1/signin` (Signin page)
   - `POST /api/v1/content` (Create content modal)
   - `GET /api/v1/content` (Custom hook `useContent`)
   - `DELETE /api/v1/content` (Card deletion, if enabled)

---

## Getting Started

### Prerequisites
- Node.js installed (v18+ recommended)
- A running instance of the [Synapse Backend API](running on port `3000` by default)

### Environment Configuration
The backend server URL is configured in `config.ts` at the root of the project:
* Ensure `BACKEND_URL` matches your running server API endpoint:
  ```typescript
  export const BACKEND_URL = "http://localhost:3000";
  ```

### Installation
Install the project dependencies:
```bash
npm install
```

### Running the Client
Start the Vite local development server:
```bash
npm run dev
```
The client runs on `http://localhost:5173` by default. Open this URL in your browser.

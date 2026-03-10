# 🌱 ToolGarden

**AI-powered productivity tools—pick what you need, grow your workflow.**

ToolGarden is a SaaS platform where users discover and use AI tools for writing, planning, and creating. Think of it as a **garden of tools**: each tool grows in one place, and you pick the ones you need. The platform is built to be simple and friendly for everyone, including non-technical users.

---

## What It Does

- **Tool marketplace** — Browse and use AI tools (blog writer, email writer, idea generator, resume helper, social media posts).
- **User accounts** — Sign up, log in (email or Google), two-factor authentication, password reset.
- **Roles** — **Users** use and favorite tools; **Creators** build and manage tools; **Admins** manage users and tools.
- **Pro subscription** — Stripe-powered upgrade for unlimited usage and premium tools.
- **Deployment** — Backend on AWS EC2, database on RDS, frontend deployable to Vercel/S3/EC2.

---

## Tech Stack

| Layer      | Technology |
|-----------|------------|
| Frontend  | Next.js (App Router), React, TypeScript, Tailwind CSS, Shadcn UI |
| Backend   | NestJS, TypeScript |
| Database  | PostgreSQL |
| ORM       | Prisma |
| Auth      | JWT, Email/Password, Google OAuth, 2FA (OTP) |
| AI        | OpenAI API |
| Payments  | Stripe (subscriptions) |
| Deployment| AWS (EC2, RDS, S3) |

---

## Project Structure (Monorepo)

```
tg/
├── frontend/          # Next.js app (UI, pages, components)
├── backend/           # NestJS API (auth, tools, AI, payments, admin)
├── shared/            # Shared types and utilities
├── README.md          # This file
└── TOOLGARDEN_7DAY_PLAN.md   # 7-day build plan & task tracker
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (or pnpm/yarn)
- **PostgreSQL** (for backend; required from Day 2 onward)
- **Git**

### Quick start (after Day 1 setup)

1. **Clone and enter the repo**
   ```bash
   cd d:\Learn\tg
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

3. **Backend** (once NestJS is set up in Day 2)
   ```bash
   cd backend
   npm install
   cp .env.example .env   # then fill in DB URL and secrets
   npx prisma migrate dev
   npm run start:dev
   ```

Environment variables (e.g. `DATABASE_URL`, `JWT_SECRET`, `OPENAI_API_KEY`, Stripe keys) are documented in the backend and in **TOOLGARDEN_7DAY_PLAN.md** (Day 7).

---

## Development Plan

This project is built step-by-step over **7 days** as a learning and interview-prep exercise. The full roadmap, daily tasks, and Git checkpoints are in:

- **[TOOLGARDEN_7DAY_PLAN.md](./TOOLGARDEN_7DAY_PLAN.md)**

Summary:

| Day | Focus |
|-----|--------|
| 1 | Project setup, Next.js, Tailwind, Shadcn, landing page |
| 2 | NestJS, Prisma, PostgreSQL, User model |
| 3 | Auth (signup, login, JWT, Google OAuth, 2FA) |
| 4 | Tool system, marketplace, tool page UI |
| 5 | AI integration (OpenAI, prompt templates) |
| 6 | Creator & Admin dashboards, role-based access |
| 7 | Stripe subscriptions, AWS deployment |

---

## MVP Features (Planned)

- [ ] Authentication (signup, login, JWT, Google OAuth, 2FA, password reset)
- [ ] Five AI tools (Blog Writer, Email Writer, Idea Generator, Resume Helper, Social Post Generator)
- [ ] Tool marketplace and tool pages (input → AI result → save/favorite)
- [ ] User dashboard (history, favorites)
- [ ] Creator dashboard (create/manage tools and prompt templates)
- [ ] Admin dashboard (users, tools, usage)
- [ ] Pro subscription (Stripe checkout, webhook, Pro role)
- [ ] Deployment (EC2, RDS, frontend host, env config)

---

## License

MIT (or your choice). Use and adapt for learning and portfolios.

---

*Built as a production-ready MVP and interview-ready full-stack project.*

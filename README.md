# Storefront App

This is a storefront management application built with Next.js, Tailwind CSS, Prisma, and Clerk.

## Features

- User authentication with Clerk
- Manage stores
  - Create, update, delete stores
- Manage store billboards
  - Create, update, delete billboards
  - Upload billboard images to Cloudinary
- Serverless API routes with Next.js API Routes
- Database with Prisma
- Styling with Tailwind CSS

## Getting Started

1. Clone the repo

```
git clone
```

2. Install dependencies

```
npm install
```

3. Setup environment variables

Copy `.env.example` to `.env` and update with your Clerk and database credentials.

4. Run Prisma migrations

```
npx prisma migrate dev
```

5. Run Next.js dev server

```
npm run dev
```

6. Open http://localhost:3000

## Deployment

The app can be deployed to any hosting platform that supports Next.js like Vercel. Make sure to setup environment variables on the host.

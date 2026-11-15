# BMJ — Company Profile

Company profile website: React 19 + Vite + Tailwind v4 + shadcn/ui frontend, **Hono** API deployed on **Cloudflare Workers**.

## Structure

```
bmj-compro/
├── frontend/          # React 19 + TypeScript + Vite + Tailwind v4 + shadcn/ui + framer-motion
│   └── src/{pages,components,layouts,data,lib}
├── backend/           # Hono on Cloudflare Workers (wrangler.jsonc)
└── package.json       # root orchestration scripts
```

## Run

```bash
npm install

# frontend (Vite dev server)
npm run dev:frontend

# backend (wrangler dev)
npm run dev:backend

# production build of the frontend
npm run build:frontend
```

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, framer-motion, React Router 7 |
| Backend | Hono, Cloudflare Workers |
| Lint | oxlint |

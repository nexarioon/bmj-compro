# BMJ company profile

Company profile website. The frontend is React 19 with Vite and Tailwind v4, the API is Hono on Cloudflare Workers.

## Structure

```
bmj-compro/
├── frontend/          # React 19, TypeScript, Vite, Tailwind v4, shadcn/ui, framer-motion
│   └── src/{pages,components,layouts,data,lib}
├── backend/           # Hono on Cloudflare Workers (wrangler.jsonc)
└── package.json       # root scripts
```

## Run

```bash
npm install

npm run dev:frontend    # Vite dev server
npm run dev:backend     # wrangler dev
npm run build:frontend  # production build
```

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, framer-motion, React Router 7 |
| Backend | Hono, Cloudflare Workers |
| Lint | oxlint |

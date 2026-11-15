# BMJ — Company Profile

Website company profile BMJ: frontend React 19 + Vite + Tailwind v4 + shadcn/ui, backend **Hono** yang dideploy ke **Cloudflare Workers**.

## Struktur

```
bmj-compro/
├── frontend/          # React 19 + TypeScript + Vite + Tailwind v4 + shadcn/ui + framer-motion
│   └── src/{pages,components,layouts,data,lib}
├── backend/           # Hono di Cloudflare Workers (wrangler.jsonc)
└── package.json       # script orkestrasi root
```

## Menjalankan

```bash
npm install

# frontend (Vite dev server)
npm run dev:frontend

# backend (wrangler dev)
npm run dev:backend

# build frontend
npm run build:frontend
```

## Stack

| Bagian | Teknologi |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, framer-motion, React Router 7 |
| Backend | Hono, Cloudflare Workers |
| Lint | oxlint |

# Next 15 + Tailwind Starter

Starter minimalista para aprender **Next.js 15 (App Router)** com **TailwindCSS**, cobrindo SSR, SSG, ISR, API Routes, Middleware, SEO e Server Actions.

## Requisitos
- Node 18+ (recomendado 20+)
- pnpm, yarn ou npm

## Como usar
```bash
pnpm install # ou npm install / yarn
pnpm dev     # ou npm run dev
```

> Dica: defina `NEXT_PUBLIC_BASE_URL` no `.env.local` para SSR que chama a API interna (ex.: `http://localhost:3000` em dev, ou a URL do Vercel em prod).

## Rotas incluídas
- `/` – overview do projeto
- `/about` – página simples
- `/products/[id]` – **SSR** (usa `cache: "no-store"` e consome `/api/products`)
- `/blog` e `/blog/[slug]` – **SSG/ISR** com `revalidate = 60`
- `/dashboard` – rota **protegida** por `middleware.ts`

## API Routes
- `GET /api/health` – healthcheck
- `GET /api/products` – lista mock
- `GET /api/products?id=123` – item mock
- `POST /api/products` – echo
- `GET /api/auth/mock?login=1` – cria cookie `auth=1`
- `GET /api/auth/mock?logout=1` – remove cookie

## Middleware (Auth Simples)
- Bloqueia `/dashboard` se o cookie `auth` !== "1".
- Use `/api/auth/mock` para simular login/logout.

## SEO
- `app/layout.tsx` define `metadata` base.
- Páginas de blog geram metadata dinâmica.

## Tailwind
- Config padrão com tema básico e container centralizado.

## Scripts
- `dev`, `build`, `start`, `lint`, `format`

## Próximos Passos
- Trocar mocks por uma API real.
- Adicionar `revalidateTag`/`revalidatePath` em server actions.
- Implementar NextAuth.js.
- Escrever testes (Vitest/RTL) para componentes críticos.

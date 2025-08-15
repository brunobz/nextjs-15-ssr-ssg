export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Next 15 + Tailwind Starter</h1>
      <p className="text-white/80">
        Este template serve como base para estudar SSR, SSG, ISR, Server Components, API Routes, Middleware e SEO.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="SSR (Server-Side Rendering)">
          <p>Exemplo em <code>/products/[id]</code> consumindo a própria API interna.</p>
        </Card>
        <Card title="SSG / ISR">
          <p>Exemplo em <code>/blog</code> com <code>export const revalidate = 60</code>.</p>
        </Card>
        <Card title="API Routes">
          <p>Veja <code>/api/products</code> e <code>/api/health</code> (GET).</p>
        </Card>
        <Card title="Middleware + Auth">
          <p><code>/dashboard</code> é protegido via <code>middleware.ts</code>. Use <code>/api/auth/mock</code> para simular login.</p>
        </Card>
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4">
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="text-white/80">{children}</div>
    </div>
  );
}

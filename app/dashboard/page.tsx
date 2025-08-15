export default function DashboardPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold">Dashboard (Protected)</h1>
      <p className="text-white/70">
        Esta rota é protegida por <code>middleware.ts</code>. Use <code>/api/auth/mock?login=1</code> para simular login,
        e <code>/api/auth/mock?logout=1</code> para sair.
      </p>
    </section>
  );
}

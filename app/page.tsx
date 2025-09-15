import Link from "next/link";

export default function HomePage() {
  return (
    <section
      role="region"
      aria-labelledby="hero-heading"
      className="relative isolate px-6 py-16 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to <span className="text-primary">Next Store</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-[var(--fg-muted)]">
          A modern application with Next.js 15, SSR, SSG, ISR, authentication, and optimized SEO.
          Explore products and read exclusive content on our blog.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/products"
            aria-label="Explore our list of products and courses"
            className="rounded-xl bg-[var(--fg)] px-5 py-3 text-base font-semibold text-[var(--bg)] shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span aria-hidden="true">🚀</span> Explore Products
          </Link>

          <Link
            href="/blog"
            aria-label="Read our latest blog posts"
            className="rounded-xl border border-[var(--fg-muted)] px-5 py-3 text-base font-semibold text-[var(--fg)] hover:bg-[var(--fg-muted)] hover:text-[var(--bg)] transition focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span aria-hidden="true">📝</span> Read Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

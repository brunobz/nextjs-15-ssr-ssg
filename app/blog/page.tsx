export const revalidate = 60; // ISR every 60 seconds

type Post = { slug: string; title: string; excerpt: string };

async function getPosts(): Promise<Post[]> {
  // Simula uma fonte SSG/ISR com cache padrão (force-cache)
  return [
    { slug: "hello-next", title: "Hello Next.js 15", excerpt: "Começando com o App Router." },
    { slug: "ssr-ssg-isr", title: "SSR, SSG e ISR", excerpt: "Quando usar cada estratégia." }
  ];
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Blog (ISR)</h1>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-xl border border-white/10 p-4">
            <a href={`/blog/${p.slug}`} className="font-semibold hover:underline">{p.title}</a>
            <p className="text-white/70 text-sm">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

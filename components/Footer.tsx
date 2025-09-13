export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/6">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
        <div>© {new Date().getFullYear()} TechBooks — Built with Next.js</div>
        <div className="mt-3 md:mt-0 flex gap-3 items-center">
          <a
            href="https://github.com/SEU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a href="/sitemap.xml" className="hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

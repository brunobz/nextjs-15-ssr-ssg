import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <section className="prose prose-invert max-w-none">
      <h1>About</h1>
      <p>
        Este projeto foi criado para acelerar seu aprendizado em Next.js com foco no que o mercado pede.
      </p>
    </section>
  );
}

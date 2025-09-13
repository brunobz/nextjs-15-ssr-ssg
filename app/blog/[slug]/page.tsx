import { BASE_URL } from "@/config/constants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Post = { slug: string; title: string; body: string };

const POSTS: Record<string, Post> = {
  "hello-next": {
    slug: "hello-next",
    title: "Hello Next.js 15",
    body: "Este é um post de exemplo estático usando ISR.",
  },
  "ssr-ssg-isr": {
    slug: "ssr-ssg-isr",
    title: "SSR, SSG e ISR",
    body: "Quando usar SSR, SSG e ISR em projetos reais.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) {
    return {
      title: "Post não encontrado",
      description: "Este post não existe ou foi removido.",
    };
  }

  return {
    title: post.title,
    description: post.body.slice(0, 120),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 120),
      type: "article",
      url: `${BASE_URL}/blog/${post.slug}`,
      images: [
        {
          url: `${BASE_URL}/og/${post.slug}.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.body.slice(0, 120),
      images: [`${BASE_URL}/og/${post.slug}.png`],
    },
  };
}

export async function generateStaticParams() {
  return Object.values(POSTS).map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

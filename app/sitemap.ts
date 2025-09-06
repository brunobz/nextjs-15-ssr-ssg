import { MetadataRoute } from "next";
import { getPosts } from "./blog/page";

const baseURL = process.env.NEXTAUTH_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...postEntries];
}

import { BASE_URL } from "@/config/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const metadata: Metadata = {
  title: "Courses & eBooks | Level Up Your Tech Career",
  description:
    "Explore our collection of online courses and eBooks designed to help developers and tech professionals grow their careers.",
  openGraph: {
    title: "Courses & eBooks | Level Up Your Tech Career",
    description:
      "Explore our collection of online courses and eBooks designed to help developers and tech professionals grow their careers.",
    url: `${BASE_URL}/products`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og/products.png`,
        width: 1200,
        height: 630,
        alt: "Our Courses & eBooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses & eBooks | Level Up Your Tech Career",
    description:
      "Explore our collection of online courses and eBooks designed to help developers and tech professionals grow their careers.",
    images: [`${BASE_URL}/og/products.png`],
  },
};

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json() as Promise<Array<Product> | null>;
}

export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
        <article
          key={product.id}
          className="group rounded-xl border bg-card hover:shadow-lg transition overflow-hidden"
        >
          <Link
            href={`/products/${product.id}`}
            className="block focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`View details for ${product.title}`}
          >
            <div className="aspect-video overflow-hidden">
              {/* <Image
                src={product.image}
                alt={`Cover of ${product.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              /> */}
            </div>
            <div className="p-4 space-y-2">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              <p className="text-primary font-bold" aria-label={`Price ${product.price} USD`}>
                R$ {product.price}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

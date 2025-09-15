import Image from "next/image";
import NotFound from "@/app/not-found";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products/${id}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return NotFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-6" aria-labelledby="product-title">
      {/* Product image */}
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={`Cover image of ${product.title}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Product info */}
      <header>
        <h1 id="product-title" className="text-3xl font-bold">
          {product.title}
        </h1>
      </header>

      <p className="text-muted-foreground text-lg">{product.description}</p>

      <p className="text-primary font-bold text-2xl" aria-label={`Price: R$ ${product.price}`}>
        R$ {product.price}
      </p>

      {/* CTA */}
      <button
        className="rounded-xl bg-[var(--fg)] px-5 py-3 text-base font-semibold text-[var(--bg)] shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label={`Buy ${product.title} now for R$ ${product.price}`}
      >
        Buy Now
      </button>
    </article>
  );
}

import { notFound } from "next/navigation";

async function fetchProduct(id: string) {
  // SSR request (no-store) to internal API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products?id=${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json() as Promise<{ id: string; name: string; price: number } | null>;
}

export const ProductDetail = async ({ id }: { id: string }) => {
  const product = await fetchProduct(id);
  if (!product) notFound();

  return (
    <>
      <h1 className="text-2xl font-bold">Product {product.id}</h1>
      <p className="text-[var(--fg-muted)]">Name: {product.name}</p>
      <p className="text-[var(--fg-muted)]">Price: ${product.price.toFixed(2)}</p>
    </>
  );
};

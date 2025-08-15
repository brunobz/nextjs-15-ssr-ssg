import { notFound } from "next/navigation";

async function fetchProduct(id: string) {
  // SSR request (no-store) to internal API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products?id=${id}`, {
    cache: "no-store"
  });
  if (!res.ok) return null;
  return res.json() as Promise<{ id: string; name: string; price: number } | null>;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  if (!product) notFound();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Product {product.id}</h1>
      <p className="text-white/80">Name: {product.name}</p>
      <p className="text-white/80">Price: ${product.price.toFixed(2)}</p>
      <form action={refreshPrice}>
        <input type="hidden" name="id" value={product.id} />
        <button className="mt-2 rounded-xl border border-white/20 px-3 py-1 text-sm hover:bg-white/10" type="submit">
          Revalidate Price (Server Action)
        </button>
      </form>
    </section>
  );
}

// Server Action example to revalidate a tag
export const dynamic = "force-dynamic";

async function refreshPrice(formData: FormData) {
  "use server";
  const id = String(formData.get("id"));
  // In a real app, you'd update data and then revalidate by tag/path
  // revalidateTag(`product:${id}`)  // requires fetch tag on data source
  console.log("Pretend to revalidate product", id);
}

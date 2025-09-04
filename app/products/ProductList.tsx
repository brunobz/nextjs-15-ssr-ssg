import { revalidateProducts } from "./actions";

type Product = { id: string; name: string; price: number };

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products`, {
    next: { tags: ["products"] },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json() as Promise<Array<{ id: string; name: string; price: number }> | null>;
}

export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Products (cached by tag)</h2>
      <ul className="space-y-2">
        {products?.slice(0, 5).map((p) => (
          <li key={p.id} className="rounded-lg border border-white/10 p-2 hover:bg-white/5">
            {p.name}
          </li>
        ))}
      </ul>

      <form action={revalidateProducts}>
        <button
          type="submit"
          className="mt-4 rounded-lg border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
        >
          🔄 Revalidate Products
        </button>
      </form>
    </section>
  );
}

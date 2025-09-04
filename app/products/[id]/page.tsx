import { Suspense } from "react";
import { ProductDetail } from "./ProductDetails";

export default async function ProductPage({ params }: { params: { id: string } }) {
  return (
    <section className="space-y-4">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <ProductDetail id={params.id} />
      </Suspense>
      <form action={refreshPrice}>
        <input type="hidden" name="id" value={params.id} />
        <button
          className="mt-2 rounded-xl border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
          type="submit"
        >
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

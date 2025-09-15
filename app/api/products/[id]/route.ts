import { NextResponse } from "next/server";
import productsDetails from "@/data/products/products-detail.json";

function mockFetch<T>(data: T, delay = 500): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const data = await mockFetch(productsDetails);
  const item = data.find((p) => p.id === params.id);

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}

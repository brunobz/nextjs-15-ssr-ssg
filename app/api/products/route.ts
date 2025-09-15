import { NextResponse } from "next/server";
import products from "@/data/products/products.json";

function mockFetch<T>(data: T, delay = 500): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

export async function GET() {
  return NextResponse.json(await mockFetch(products));
}

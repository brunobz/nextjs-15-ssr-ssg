import { NextRequest, NextResponse } from "next/server";

const DB = [
  { id: "123", name: "Blue Widget", price: 19.99 },
  { id: "456", name: "Red Widget", price: 29.5 }
];

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json(DB);
  const item = DB.find((p) => p.id === id);
  if (!item) return new NextResponse("Not found", { status: 404 });
  return NextResponse.json(item);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ ok: true, received: body });
}

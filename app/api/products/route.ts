import { NextRequest, NextResponse } from "next/server";

const DB = [
  {
    id: "react-ebook",
    name: "React Fundamentals eBook",
    price: 29.9,
    description: "Learn the fundamentals of React with practical examples.",
  },
  {
    id: "nextjs-course",
    name: "Next.js Advanced Course",
    price: 79.9,
    description: "Master SSR, ISR, and advanced optimizations in Next.js 15.",
  },
  {
    id: "tailwind-guide",
    name: "TailwindCSS Design Guide",
    price: 39.9,
    description: "A modern guide to building fast, beautiful UIs with Tailwind.",
  },
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

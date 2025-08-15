import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const login = url.searchParams.get("login");
  const logout = url.searchParams.get("logout");
  const res = NextResponse.json({ ok: true, login: !!login, logout: !!logout });

  if (login) {
    res.cookies.set("auth", "1", { httpOnly: false, path: "/" });
  }
  if (logout) {
    res.cookies.set("auth", "", { httpOnly: false, path: "/", maxAge: 0 });
  }
  return res;
}

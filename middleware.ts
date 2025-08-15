import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_PREFIX = "/dashboard";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith(PROTECTED_PREFIX)) {
    const isAuthed = req.cookies.get("auth")?.value === "1";
    if (!isAuthed) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("redirectedFrom", pathname);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
};

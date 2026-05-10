import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  // cek cookie login
  const isLogin = request.cookies.get("login");

  // kalau belum login
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // kalau sudah login
  return NextResponse.next();
}

// route yang dijaga
export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};
import { NextResponse } from "next/server";

import { cookies } from "next/headers";

export async function middleware(request) {
  const token = cookies().get("user-token");
  if (!token) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/payment/:path*"],
};

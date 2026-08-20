import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { hasKoreanInsightGroupContent } from "@/lib/insights";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/ko/insights/news" && !hasKoreanInsightGroupContent("news")) {
    const destination = request.nextUrl.clone();
    destination.pathname = "/ko/insights";
    return NextResponse.redirect(destination, 308);
  }

  const requestHeaders = new Headers(request.headers);
  const language = request.nextUrl.pathname === "/ko" || request.nextUrl.pathname.startsWith("/ko/") ? "ko" : "en";
  requestHeaders.set("x-fourfeetz-language", language);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)"],
};

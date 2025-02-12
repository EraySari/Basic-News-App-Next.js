import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  return NextResponse.next();
}

//filter
export const config = {
  matcher: "/news",
};

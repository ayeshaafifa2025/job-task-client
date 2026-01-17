import { NextResponse } from 'next/server'

export function middleware(request) {
   
    const isLoggedin = request.cookies.get("auth")?.value === "true";
    const { pathname } = request.nextUrl;

    
    if (!isLoggedin && pathname.startsWith('/foods')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

   
    if (isLoggedin && pathname === '/login') {
        return NextResponse.redirect(new URL('/foods', request.url))
    }

    return NextResponse.next();
}

export const config = {
  
    matcher: ['/foods/:path*', '/login'],
}
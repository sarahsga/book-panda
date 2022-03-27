import { NextResponse } from 'next/server'
export async function middleware(req, ev) {
    const { pathname, origin } = req.nextUrl;
    if (pathname == '/') {
        return NextResponse.rewrite(`${origin}/categories`)
    }
    return NextResponse.next()
}
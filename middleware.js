import { NextResponse } from 'next/server';
import { checkToken } from './src/lib/token';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    /* empty */
  }
  if (request.nextUrl.pathname.startsWith('/api') || request.nextUrl.pathname.startsWith('/events')) {
    if (request.cookies.has('Authentication')) {
      const token = request.cookies.get('Authentication');
      const parsedToken = checkToken(token);
      if (parsedToken === undefined) return NextResponse.redirect('/login');
      if (parsedToken.expired) return NextResponse.redirect('/login');
    }
  }

  return NextResponse.next();
}

import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is /auth redirect the user to /
  if (user && req.nextUrl.pathname === '/auth') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // if user is not signed in and the current path is not /auth redirect the user to /auth
  if (!user && req.nextUrl.pathname !== '/auth') {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/auth', '/'],
};

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get('token')?.value;
  const url = request.nextUrl.clone();
  url.pathname = '/login';

  if (!token) {
    return NextResponse.redirect(url);
  }
};
export const config = {
  matcher: '/dashboard/:path*',
};

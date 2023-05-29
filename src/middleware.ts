import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const Url = req.nextUrl;
  if (Url.pathname.startsWith('/admin')) {
    const supabase = createMiddlewareSupabaseClient<any>({ req, res });
    const data = await supabase.auth.getSession();
    if(data)
      return NextResponse.rewrite(new URL('/auth/login', req.url));
  }
  
  return res
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/admin/:path*']
// };
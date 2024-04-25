import React from 'react'
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'


export function middleware(request: NextRequest) {

  const path=request.nextUrl.pathname
  const publicpath=path==='/login'|| path==='/signup'|| path==='/verifyemail'
  const token=request.cookies.get('token')?.value || ''

  if(publicpath && token){
    return NextResponse.redirect(new URL('/',request.nextUrl))
  }

  if(!publicpath && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl))
  }
  
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}



import { NextResponse } from 'next/server'

export function middleware(req, res) {
  if(req.session && req.session.user.isLogin){
    return NextResponse.redirect('/market');
  } else{
    return NextResponse.redirect('/home');
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from "iron-session/next";
export const ironOptions = {
  cookieName: "myapp_cookiename",
  password: "complex_password_at_least_32_characters_long",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export default withIronSessionApiRoute(handler, ironOptions);

export default async function handler(req, res) {
  console.log(req.body,req.method);
  // console.log(JSON.parse(req.body))
  if(req.method === 'POST'){
  if(req.body.username ==='ronen' && req.body.password ==='shraga'){
    req.session.user ={
      id:req.body.username,
      isLogin:true,
    }
    await req.session.save();
    res.redirect(200,'/market');
  } else{
    res.status(401).json('login failed')
  }
}
}

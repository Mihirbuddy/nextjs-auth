import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"


export const getDatafromToken=(request: NextRequest)=>{
  try{
    const token=request.cookies.get("token")?.value || "";
    //this basically means that hamne user ke liye ek token banaya tha (cookie bhi banayi thi )ab ham use extract kar rahe hai to agar uski koi value aayi to ham use .value karke extract kar rahe hai nahi to agar kuch return nahi hua to ham empty string return kar rahe hai instead of dealing with undefined
    const decodedToken:any=jwt.verify(token,process.env.TOKEN_SECRET!)
    return decodedToken.id

    //to jo bhi token hamne extract kiya ham usko verify kar rahe hai by decoding it through our token_secret aur jo bhi decoded token aaya
     //to yaad karo while logging in hamne tokendata banaya tha to hamen id and baaki cheeze pass kari thi to extract karte time bhi ham id karke hi lenge  ***remember ham mongo se ye data nahi le rahe instead ham ye data hamne jo log in ke time pe token banaya usse le rahe hai 
     //to ham id lenge not _id

  }


  catch(error:any){
    throw new Error(error.message)
  }
}
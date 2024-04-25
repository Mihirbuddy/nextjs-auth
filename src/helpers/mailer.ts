import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs' 
import User from '@/models/userModel'

export const sendEmail=async({email,emailType,userId}:any)=>{

  try{
    const hashedToken=await bcryptjs.hash(userId.toString(),10)

    if(emailType === "VERIFY"){
      await User.findByIdAndUpdate(userId,{$set:{verifyToken: hashedToken,verifyTokenExpiry: new Date(Date.now() + 3600000)}});
    //3600000 meanns passing 1hr in milliseconds
    }

    if(emailType === "RESET"){
      await User.findByIdAndUpdate(userId,{$set:{forgetPasswordToken: hashedToken,forgetPasswordTokenExpiry: new Date(Date.now() + 3600000)}})
    }

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: "maddison53@ethereal.email",
    //     pass: "jn7jnAPss4f63QBp6D",
    //   },
    // });

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ee07e56d62a9f8",
        pass: "213905e4741056"
      }
    });


    const mailOptions={
      from: 'pradhanji@gmail.com', 
      to: email,
      subject: emailType === 'VERIFY' ? "verify your email" : "Reset your password",
      html: `<p>click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a>
       to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
      or copy or paste the link below in your browser.
      <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
    </p>`,
    }

    const mailResponse=await transport.sendMail(mailOptions) // doubt in transport and transporter
    return mailResponse

  }

  catch(error:any){
    throw new Error(error.message)

  }

}
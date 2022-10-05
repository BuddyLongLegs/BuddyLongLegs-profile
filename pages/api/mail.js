// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';
require("dotenv/config");

var transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_KEY,
  },
});

async function confirm(email, name){
  var mailOptions = {
    from: `Anurag Jain<${process.env.EMAIL}>`,
    to: email,
    subject: "Thank you for Connecting",
    text: ``,
    html: `
    Hello <strong>${name}</strong>,<br/>
    Thank you for connecting with me. I have recieved your message and I will be contacting ASAP.<br/><br/>
    Regards<br/>
    Anurag Jain
    `,
  };
  return transporter.sendMail(mailOptions);
};

async function selfConfirm(body){
  var mailOptions = {
    from: `Portfolio<${process.env.EMAIL}>`,
    to: 'anurag10jain+profile@gmail.com',
    subject: `New message recieved from ${body.name}`,
    text: "",
    html: `
    name:${body.name}<br/>
    email: <a href="mailto:${body.email}">${body.email}</a><br/>
    subject: ${body.subject}<br/>
    message:<br/>
    ${body.message}
    `
  };
  return transporter.sendMail(mailOptions);
};

export default async function handler(req, res) {
  if(req.method !== "POST"){
    return res.status(500).json({error: "Unable to send mail"});
  }
  let body = JSON.parse(req.body)
  await selfConfirm(body);
  let done = await confirm(body.email, body.name);
  if(done.rejected.length >0){
    return res.status(500).json({error: "Unable to send mail"});
  }else{
    return res.status(200).json({message: "Ok"});
  }
}
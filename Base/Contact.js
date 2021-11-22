// https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645

export default function (req, res) {

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_SENDER_USER,
      pass: process.env.EMAIL_SENDER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL_SENDER_USER,
    to: process.env.EMAIL_RECIPIENTS,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email} - ${req.body.name}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  })

  console.log(req.body)
  res.send('success')
}
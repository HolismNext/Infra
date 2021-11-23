// https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645

const Contact = async (req, res) => {

  const env = {
    user: process.env.EMAIL_SENDER_USER,
    pass: process.env.EMAIL_SENDER_PASSWORD,
    recipients: process.env.EMAIL_RECIPIENTS
  }

  console.log(env);

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
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email} - ${req.body.name} - ${req.body.phone}</p>`
  }

  console.log(req.body)

  const result = await transporter.sendMail(mailData)
  console.log('nodemailer result', result);

  if (result.accepted && result.accepted.length > 0) {
    res.send('success');
  }
  else {
    res.send(result)
  }
}

export default Contact;
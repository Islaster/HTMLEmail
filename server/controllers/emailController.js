const nodemailer = require('nodemailer');

module.exports = {sendMail};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'thethingfire@gmail.com',
        pass: process.env.PASS
    }
});

function sendMail(req, res) {
     const { htmlContent } = req.body;

    const mailOptions = {
      from: 'thethingfire@gmail.com',
      to: 'isaac.laster812@gmail.com',
      subject: 'Davant Systems photo booth pictures',
      html: htmlContent
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending message: ', error);
        res.status(500).send({ success: false, message: 'Failed to send email', error: error.toString() });
      } else {
            res.status(200).send({ success: true, message: 'Email sent', info: info });
            console.log('Email sent:', info);
      }
    });
  }
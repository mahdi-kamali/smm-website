
const nodemailer = require("nodemailer");

const { SMTP } = require("./envAccess");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: SMTP.EMAIL,
        pass: SMTP.PASSWORD,
    },
});






var mailOptions = {
    from: SMTP.EMAIL,
    to: 'target@gmail.com',
    subject: 'Sending Email using Node.js[nodemailer]',
    text: 'message of email '
};


async function sendEmail(targetEmail, text) {

    mailOptions.to = targetEmail
    mailOptions.text = text
    try {
        await transporter
            .sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
    }
    catch (e) {
        console.log(e)
    }

}

module.exports = { sendEmail }



const nodemailer = require('nodemailer');

const { DEFAULT_HTML_TEMPLATE } = require("../mail/template");
const { LOAD_TEMPLATE } = require('../mail/load');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    // secure: false,
    auth: {
        user: "shaharyarahmad233@gmail.com",
        pass: "badd faua dtfb xrkx",
    },
});

// Function to send email using created transporter
const SENDMAIL = async (mailDetails, callback) => {
    try {
        const info = await transporter.sendMail(mailDetails)
        callback(info);
    } catch (error) {
        console.log(error);
    }
};

// Send default template email function
const sendDefaultEmail = async (to, subject, message) => {
    const options = {
        from: "OnPayload <shaharyarahmad233@gmail.com>", // sender address
        to,
        subject,
        text: message,
        html: DEFAULT_HTML_TEMPLATE(message),
    }

    // send mail with defined transport object and mail options
    SENDMAIL(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    });
}

// Send default template email function
const sendLoadEmail = async (to, subject, body) => {
    const options = {
        from: "OnPayload <shaharyarahmad233@gmail.com>", // sender address
        to,
        subject,
        html: LOAD_TEMPLATE(body),
    }

    // send mail with defined transport object and mail options
    SENDMAIL(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    });
}

module.exports = { sendDefaultEmail, sendLoadEmail }
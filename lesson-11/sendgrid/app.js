const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "george.martin@gmail.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Когда уже выйдут Ветра зимы?????",
    html: "Через 2-3 недели"
}

sgMail.send(mail)
    .then(() => console.log("Email send success"))
    .catch(error => console.log(error.message))
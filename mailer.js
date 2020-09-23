const nodemailer = require('nodemailer')
const config = require('./MailConfig.json')
const transporter = nodemailer.createTransport({
    service: "Hotmail",
    secure: false,
    auth: {
        user: config.email,
        pass: config.pass
    }
})

const send = (req) => {
    const { email, firstName } = req
    const from = firstName && email ? `${firstName} <${email}>` : `${firstName || email}`
    const message = {
        from: config.email,
        to: config.email,
        subject: `Siteden yazanlarda bu gün ${from}`,
        html: emailTemplateTable(req),
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}
function emailTemplateTable({
    firstName, lastName, email, number, company, website, message
}) {
    return '<html><head><style>table { \
    font-family: arial, sans-serif;\
    border-collapse: collapse;\
    width: 100%;\
  }\
  \
  td, th {\
    border: 1px solid #dddddd;\
    text-align: left;\
    padding: 8px;\
    vertical-align: initial;\
  }\
  \
  tr:nth-child(even) {\
    background-color: #dddddd;\
  }</style></head><body><table style="width:100%"> \
<tr> \
    <td>Firstname</td> \
    <td>'+ firstName + '</td> \
</tr> \
<tr> \
    <td>Lastname</td> \
    <td>'+ lastName + '</td> \
</tr> \
<tr> \
    <td>email</td> \
    <td>'+ email + '</td> \
</tr> \
<tr> \
    <td>number</td> \
    <td>'+ number + '</td> \
</tr> \
<tr> \
    <td>company</td> \
    <td>'+ company + '</td> \
</tr> \
<tr> \
    <td>website</td> \
    <td>'+ website + '</td> \
</tr> \
<tr> \
    <td>message</td> \
    <td>'+ message + '</td> \
</tr> \
</table></body></html>'};
module.exports = send
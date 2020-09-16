const postmark = require('postmark')

var client = new postmark.ServerClient(process.env.POSTMARK_API_KEY)

const sendWelcomeEmail = (email, name) => {
    client.sendEmail({
        "From": process.env.FROM_EMAIL,
        "To": email,
        "Subject": "Welcome to the app!",
        "HtmlBody": `Welcome to the app, dear ${name}! Please let me know how you feel about this app!`,
        "MessageStream": "outbound"
    })
}  

const sendCancelationEmail = (email, name) => {
    client.sendEmail({
        "From": process.env.FROM_EMAIL,
        "To": email,
        "Subject": "Sorry to See You Go",
        "HtmlBody": `Goodbye, dear ${name}. I hope to see you back sometime soon!`,
        "MessageStream": "outbound"
    })
}  

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
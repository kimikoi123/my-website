
const form = document.querySelector('[data-form]')
const email = document.getElementById('email')
const name = document.getElementById('name')
const subject = document.getElementById('subject')
const message = document.getElementById('message')





function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "testingkimuel@gmail.com",
        Password : "testingaccount",
        To : 'testingkimuel@gmail.com',
        From : email.value,
        Subject : subject.value,
        Body : `Name: ${name.value} <br/> Email: ${email.value} <br/> Message: ${message.value}`
    }).then(
      message => alert(message)
    );
}
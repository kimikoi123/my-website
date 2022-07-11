
const form = document.querySelector('[data-form]')
const email = document.getElementById('email')
const name = document.getElementById('name')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const graphicDesignBtn = document.getElementById('graphic-design-button')
const webDevelopmentBtn = document.getElementById('web-development-button')
const graphicDesignContainer = document.getElementById('graphic-design-container')
const webDeveloperContainer = document.getElementById('web-developer-container')


graphicDesignBtn.addEventListener('click', () => switchPortfolio(graphicDesignBtn))
webDevelopmentBtn.addEventListener('click', () => switchPortfolio(webDevelopmentBtn))

function switchPortfolio(button) {
  if (button === graphicDesignBtn) {
    graphicDesignContainer.style.display = 'flex'
    webDeveloperContainer.style.display = 'none'
  } else {
    graphicDesignContainer.style.display = 'none'
    webDeveloperContainer.style.display = 'flex'
  }
  
}


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
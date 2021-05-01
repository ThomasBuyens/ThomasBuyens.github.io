const scriptURL = 'https://script.google.com/macros/s/AKfycbwCeMslNZ4kIo8KRaDPILoyoxc7WHS7m6mWrQWNBADQ67VCOfd0/exec'
const sendEmail = 'https://script.google.com/macros/s/AKfycbwwc_EfSX2Ncb0hOfPCBJUsQlhc9OscuYc1BgP70bEnUAscBk131NfnGw/exec'
const form = document.forms['google-sheet']
const submit = document.getElementById("submit");
submit.addEventListener('mousedown', function() {
  submit.style.backgroundColor = "#003399";
})
submit.addEventListener('touchstart', function() {
  submit.style.backgroundColor = "#003399";
})
submit.addEventListener('mouseup', function() {
  submit.style.backgroundColor = "#FF6600";
})
submit.addEventListener('touchend', function() {
  submit.style.backgroundColor = "#FF6600";
})
submit.addEventListener('click', e => {
  e.preventDefault()
  if (document.getElementById('message').value.length !== 0) {
    displayLoading();
  fetch(scriptURL, { method: 'post', body: new FormData(form) })
    .then(response => displaySent())
    .catch(error => console.error('Error!', error.message))
  }
})
function displayLoading() {
  

  switch (submit.getAttribute("value")) {
    case "Send":
      submit.setAttribute("value", "Sending..");
      submit.style.backgroundColor = "#003399";
      break;
    case "Versturen":
      submit.setAttribute("value", "Versturing..");
      submit.style.backgroundColor = "#003399";
      break;
    case "Envoyer":
      submit.setAttribute("value", "Chargement..");
      submit.style.backgroundColor = "#003399";
      break;
  }
}
function displaySent() {
  

  switch (submit.getAttribute("value")) {
    case "Sending..":
      submit.setAttribute("value", "Well received!");
      submit.style.backgroundColor = "green";
      break;
    case "Versturing..":
      submit.setAttribute("value", "Goed ontvangen!");
      submit.style.backgroundColor = "green";
      break;
    case "Chargement..":
      submit.setAttribute("value", "Bien reçu !");
      submit.style.backgroundColor = "green";
      break;
  }
  setTimeout(functie = () => {
    switch (submit.getAttribute("value")) {
      case "Well received!":
        submit.setAttribute("value", "Send");
        submit.style.backgroundColor = "#FF6600";
        break;
      case "Goed ontvangen!":
        submit.setAttribute("value", "Versturen");
        submit.style.backgroundColor = "#FF6600";
        break;
      case "Bien reçu !":
        submit.setAttribute("value", "Envoyer");
        submit.style.backgroundColor = "#FF6600";
        break;
    }
  }, 5000);
  document.getElementById('formeke').reset();
}

//Small menu
let menu_click = document.getElementById("menuOpener");
let menu = document.getElementById("mobile-nav");
var clicking = false;
menu_click.addEventListener('click', function () {
  if (clicking) {
    menu.classList.remove("clicked");
    clicking = false;
  } else {
    menu.classList.add("clicked");
    clicking = true;
  }
})
window.addEventListener('touchmove', function () {
  menu.classList.remove("clicked");
  clicking = false;
})
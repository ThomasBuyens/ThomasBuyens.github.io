const scriptURL = 'https://script.google.com/macros/s/AKfycbwCeMslNZ4kIo8KRaDPILoyoxc7WHS7m6mWrQWNBADQ67VCOfd0/exec'
const sendEmail = 'https://script.google.com/macros/s/AKfycbwwc_EfSX2Ncb0hOfPCBJUsQlhc9OscuYc1BgP70bEnUAscBk131NfnGw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'post', body: new FormData(form) })
    .then(response => alert("Thanks for Contacting us! We Will get back to you as soon as possible..."))
    .catch(error => console.error('Error!', error.message))
})
//INTRO IMAGES
let prev = document.getElementsByClassName("prev");
let next = document.getElementsByClassName("next");
let intro = document.getElementById("intro");
var slidePosition = 0;
var introArray = ["intro_imageOne", "intro_imageTwo", "intro_imageThree"]
prev[0].addEventListener('click', function () {
  slidePosition--;
  if (slidePosition < 0) {
    slidePosition = 2;
  }
  intro.setAttribute('class', introArray[slidePosition]);
})
next[0].addEventListener('click', function () {
  slidePosition++;
  if (slidePosition > 2) {
    slidePosition = 0;
  }
  intro.setAttribute('class', introArray[slidePosition]);
})

//PRELOAD IMAGES
let images = ["pictures/abdel_diving.jpg", "pictures/dive2.jpg", "pictures/dive.jpg", "pictures/water.jpg", "pictures/vub-pool.jpg"];
function loadImages(images, index, callback) {
  if (index < images.length) {
      let img = new Image();
      img.src = images[index];
      images[index] = img;
      images[index].onload = function() {
          loadImages(images, ++index, callback);
      };
  } else {
      callback(images);
  }
}
window.onload = function() {
  loadImages(images, 0, (images) => {
  });
//SMALL SCREENS
let menu_click = document.getElementById("mobile-menu");
let menu = document.getElementById("mainmenu");
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
let practblock = document.getElementsByClassName("practblock");
let dropdown = document.getElementsByClassName("dropdown");
for (let index = 0; index < practblock.length; index++) {
  dropdown[index].addEventListener('touchend', function () {
    console.log(practblock[index]);
    if (clicking) {
      practblock[index].classList.remove("clicked");
      dropdown[index].setAttribute('src', 'icons/dropdown.png');
      clicking = false;
    } else {
      practblock[index].classList.add("clicked");
      dropdown[index].setAttribute('src', 'icons/dropup.png');
      clicking = true;
    }
  })

}
let practmenu = document.getElementById("practmenu");
practmenu.addEventListener('click', function () {
  for (let index = 0; index < practblock.length; index++) {
    practblock[index].classList.add("clicked");
    dropdown[index].setAttribute('src', 'icons/dropup.png');
    clicking = true;
  }
})
//BIG SCREENS
var hovering = false;
for (let index = 0; index < practblock.length; index++) {
  practblock[index].addEventListener('mouseover', function () {
    console.log(practblock[index]);
    practblock[index].classList.add("hover");
  })
  practblock[index].addEventListener('mouseout', function () {
    practblock[index].classList.remove("hover");

  })
}}
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
let userDisplay = document.getElementById('user_div');
userDisplay.style.display = "none";
let jeanne = "Jeanne Cosyn";
let jeanneCode ="Licorne";



let button = document.getElementById('bouton');
form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', event => {
	let userName = document.getElementById("username").value;
	let userPass = document.getElementById("code").value;
	console.log('testButton');
	event.preventDefault();
	if(jeanne == userName && jeanneCode == userPass) {
		console.log('test');
		document.getElementsByClassName('login-content')[0].style.display = "none";
		userDisplay.style.display = "flex";
	} else {
		alert("Tu n'as pas inseré le bon nom et/ou code. Ressaie.");
	}
})

function backToLogIn() {
	form.reset();
	userDisplay.style.display = "none";
	document.getElementsByClassName('login-content')[0].style.display = "block";
	unicorn.src = 'img/undraw_unicorn_dp2f.png';
	document.getElementById('user_para').innerText = "Pousse sur la licorne pour une réparation urgente de vélo.";
}

let unicorn = document.getElementById('unicorn');

unicorn.addEventListener('click', () => {
	sendEmail();
	unicorn.src = 'img/party.png';
	document.getElementById('user_para').innerText = "Thomas a bien reçu ton message !";
})

async function sendEmail() {
	Email.send({
	  Host: "smtp.gmail.com",
	  Username: "starttoswim.info@gmail.com",
	  Password: "SendAutoMails",
	  To: 'tbuyens@hotmail.com',
	  From: "starttoswim.info@gmail.com",
	  Subject: "Vélo cassé",
	  Body: "Please help",
	});
	console.log('yes');
  }
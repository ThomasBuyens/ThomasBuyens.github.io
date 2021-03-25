'use strict'
let quotes = ['JCEt cette manie que tu as de cracher partout comme un lama !', 'CFOu tu sors ou je te sors, mais faudra prendre une décision.', 'CFAllôôô maman ? Claudy à l’appareil ! Dis, je viens de me faire carjacker.', 'JCJe sais que je plais pas à tout le monde… Mais quand je vois à qui je plais pas, je m‘demande si ça me dérange vraiment.', 'CFDis donc on t’a jamais appris à manger avec la bouche fermée toi. C’est à toi que je cause. J’ai l’impression d’être à côté d’un camion poubelle qui travaille, moi ici !', 'JCC’est excessivement énervant !', 'JCMa main à couper qu’ça va encore tourner autour du trou d’balle, ct’histoire…', 'CFPas commencer à jouer avec mes couilles, hein !', 'JCIl est tout à fait fou ce type !', 'NASi aujourd’hui tu ressembles plus à Albator qu’à Candy c’est parce que ta maman, elle flûte !', 'CFDis donc toi !! On t’a jamais appris à manger la bouche fermée ? J’ai l’impression d’être à coté d’un camion poubelle qui travaille moi ici, connasse va ! C’EST EXCESSIVEMENT ÉNERVANT !', 'LAC’est mon engin qu’tu regardes là ? C’est féroce ça. Pistolet Tchèque semi-automatique. Ça t’arrête un Bus scolaire en pleine course… Peut être même un avion… J’sais pas j’ai pas essayé !', 'BATu es nul, archi nul, tu es viré de chez viré, tu es né idiot et tu va mourir idiot… quelle klet ce peï trou du cul de merde !', 'LAAttention, je dessine pas comme Tintin.', 'JCLa première c’est pour te faire la leçon p’tit con. La deuxième c’est pour le principe. La troisième c’est parce-que jamais deux sans trois !', 'NAComme quoi la ceinture, un petit clic vaut mieux qu’une grande claque non ?', 'LAAh je vous préviens les filles ! Je vous prête pas mon king kong !', 'CFJe rime et je rame comme tartine et boterham, hein comme on dit.', 'CFEnlève ta p’tite culotte… Bien… Bouge pas, je vais chercher le poney.', 'JCEn tout cas celle-là elle sait dire merci !', 'POHé t’es au courant qu’y a une fille avec des yeux de cocker dans ton coffre là ?', 'CFMal baisée, va !', 'CFPour une fois qu’y a une Flamande bien gaulée…', 'CFJe suis lessivé, je suis au bout du rouleau. Je rentre savate et terminé bonsoir !', 'CFAlors j’me présente : Claudy Focan. M. Focan plus exactement.', 'CFJ’suis pas bête, si elle est avec moi c’est pour mon pognon hein, pas pour mon odeur. Et ça, ça fait mal !', 'POJ’savais pas qu’tu roulais dans un kinder !', 'CFMichael Jackson ! C’est le seul blanc qui arrive a faire de la musique comme les blacks. Il y en a pas un au dessus pas un en dessous.', 'JCTe presse pas t’sais.', 'CFEt à propos de vieille truie toi comment ça va ?', 'CFAlien va ! Éducation minimum.', 'AUBen quoi… venez hein des gros nénés, un gros ventre, des grosse cuisses, ça change, ben ouais, ça change des magazines.', 'CFTu dis, Claudy je suis tendue.', 'CFJe suis directeur and sales marketing manager des abattoirs d’Anderlecht.'];
let repliques = [];
let Replique = {personage: '', phrase:''};
quotes.forEach((quote) => {
    Replique = {personage: quote.slice(0,2), phrase: quote.slice(2)};
    repliques.push(Replique);
});

let array = [];
for (let index = 0; index < quotes.length; index++) {
    array.push(index);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


let bouton = document.getElementById('boutonStart');
let quote = document.getElementById('kluut');
let scoreText = document.getElementById('score');
let score = 0;
let counter = 0;
shuffleArray(array);
bouton.addEventListener('click', function() {
    bouton.style.display = "none";
    scoreText.innerHTML = `Ton score: ${score}`
    scoreText.style.display = "block";
    quote.innerHTML = `\"${repliques[array[counter]].phrase}"`;

    counter++;
    if (counter === quotes.length) {
        shuffleArray(array);
        counter = 0;
    }
})

for (let index = 0; index < 8; index++) {
    document.getElementsByClassName('headButton')[index].addEventListener('click' ,() => {
        quote.innerHTML = `\"${repliques[array[counter]].phrase}"`;
        console.log(document.getElementsByClassName('headButton')[index].id);
        console.log(repliques[array[counter]].personage);

        if (document.getElementsByClassName('headButton')[index].id === repliques[array[counter- 1]].personage) {
            score++;
            scoreText.innerHTML = `Bien joué. Ton score: ${score}`
        } else {
            scoreText.innerHTML = `Raté. Tu es archi nul ! Ton score: ${score}`
        }
        counter++;
        if (counter === quotes.length) {
            scoreText.innerHTML = `Ton score final: ${score}`
            shuffleArray(array);
            bouton.innerHTML = "Je recommence alé"
            bouton.style.display = "block";
            counter = 0;
            score = 0;

        }
    })
    
}
        



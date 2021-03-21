let quotes = ['Et cette manie que tu as de cracher partout comme un lama !', 'Ou tu sors ou je te sors, mais faudra prendre une décision.', 'Allôôô maman ? Claudy à l’appareil ! Dis, je viens de me faire carjacker.', 'Je sais que je plais pas à tout le monde… Mais quand je vois à qui je plais pas, je m‘demande si ça me dérange vraiment.', 'Dis donc on t’a jamais appris à manger avec la bouche fermée toi. C’est à toi que je cause. J’ai l’impression d’être à côté d’un camion poubelle qui travaille, moi ici !', 'C’est excessivement énervant !', 'Ma main à couper qu’ça va encore tourner autour du trou d’balle, ct’histoire…', 'Pas commencer à jouer avec mes couilles, hein !', 'Il est tout à fait fou ce type !', 'Si aujourd’hui tu ressembles plus à Albator qu’à Candy c’est parce que ta maman, elle flûte !', 'Dis donc toi !! On t’a jamais appris à manger la bouche fermée ? J’ai l’impression d’être à coté d’un camion poubelle qui travaille moi ici, connasse va ! C’EST EXCESSIVEMENT ÉNERVANT D’ENTENDRE QUELQU’UN MANGER DES CHIPS POUR CELUI QUI N’EN MANGE PAS COMPRIIIIIS ?! Éducation minimum, je vais t’emmener ça à l’abattoir ça va être… vite fait moi t’sais !', 'C’est mon engin qu’tu regardes là ? C’est féroce ça. Pistolet Tchèque semi-automatique. Ça t’arrête un Bus scolaire en pleine course… Peut être même un avion… J’sais pas j’ai pas essayé !', 'Tu es nul, archi nul, tu es viré de chez viré, tu es né idiot et tu va mourir idiot… quelle klet ce peï trou du cul de merde !', 'Attention, je dessine pas comme Tintin.', 'La première c’est pour te faire la leçon p’tit con. La deuxième c’est pour le principe. La troisième c’est parce-que jamais deux sans trois !', 'Comme quoi la ceinture, un petit clic vaut mieux qu’une grande claque non ?', 'Ah je vous préviens les filles ! Je vous prête pas mon king kong !', 'Je rime et je rame comme tartine et boterham, hein comme on dit.', 'Enlève ta p’tite culotte… Bien… Bouge pas, je vais chercher le poney.', 'En tout cas celle-là elle sait dire merci !', 'Hé t’es au courant qu’y a une fille avec des yeux de cocker dans ton coffre là ?', 'Mal baisée, va !', 'Pour une fois qu’y a une Flamande bien gaulée…', 'Je suis lessivé, je suis au bout du rouleau. Je rentre savate et terminé bonsoir !', 'Alors j’me présente : Claudy Focan. M. Focan plus exactement.', 'J’suis pas bête, si elle est avec moi c’est pour mon pognon hein, pas pour mon odeur. Et ça, ça fait mal !', 'J’savais pas qu’tu roulais dans un kinder !', 'Michael Jackson ! C’est le seul blanc qui arrive a faire de la musique comme les blacks. Il y en a pas un au dessus pas un en dessous.', 'Te presse pas t’sais.', 'Et à propos de vieille truie toi comment ça va ?', 'Alien va ! Éducation minimum.', 'Ben quoi… venez hein des gros nénés, un gros ventre, des grosse cuisses, ça change, ben ouais, ça change des magazines.', 'Tu dis, Claudy je suis tendue.', 'Je suis directeur and sales marketing manager des abattoirs d’Anderlecht.'];
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


let bouton = document.getElementsByTagName('button')[0];
let quote = document.getElementById('kluut');
let counter = 0;
shuffleArray(array);
bouton.addEventListener('click', function() {
    bouton.innerHTML = '.. encore';

    quote.innerHTML = `\"${quotes[array[counter]]}"`;
    counter++;
    console.log(counter);
    if (counter === quotes.length) {
        shuffleArray(array);
        counter = 0;
    }
})

// function scramble (){
//     let randomsequence = [];
//     let random = Math.floor(Math.random() * quotes.length);
//     let count = 1;
//     randomsequence.push(random);
//     let pushIt = true;
//     while (count != quotes.length) {
//         random = Math.floor(Math.random() * quotes.length);
//         for (let indexx = 0; indexx < randomsequence.length; indexx++) {
//             if (random = randomsequence[indexx]) {
//                 pushIt = false
//             }
//         }
//         if (pushIt) {
//             randomsequence.push(random);
//             count++;
//         }
//     }
// }
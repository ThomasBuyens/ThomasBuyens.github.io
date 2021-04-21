
let startButton = document.getElementById('startButton');

startButton.addEventListener('click', ()=> {
    document.getElementsByClassName('questionBox')[0].style.display = 'block';
    console.log('test');
    startButton.style.display = 'none';
})

let images = document.getElementsByTagName('img');
let answer = [false, true, true, false, true, false, true, false, true, false];
let tryout = [false, false, false, false, false, false, false, false, false, false];


for (let index = 0; index < images.length; index++) {
    images[index].addEventListener('click', () => {
        for (let i = 0; i < images.length; i++) {
            images[i].style.border = 'none';
        }
        images[index].style.border = 'solid black 3px';
        tryout[index] = true; 
    })

}



let confirm = document.getElementsByClassName('confirm');
let questBox = document.getElementsByClassName('questionBox');
let score = 0;
for (let index = 0; index < confirm.length; index++) {
    confirm[index].addEventListener('click', () => {
        questBox[index].style.display = 'none';

        if (index != 4) {
            questBox[index + 1].style.display = 'block';
            if (tryout[index*2] == answer[index*2]) {
                score += 1;
            }
        } else {
            if (tryout[index*2] == answer[index*2]) {
                score += 1;
            }
            displayScore(score);
        }


    })
}


function displayScore(score) {
    document.getElementById('finalscore').innerText += `${score} out of 5.`
    switch (score) {
        case 0:
            document.getElementById('finalscore').innerText += ` You are just not made for puking strategically. Consider stopping alcohol consumption altogether.`;
            break;
        case 1:
            document.getElementById('finalscore').innerText += ` You are just not made for puking strategically. Consider stopping alcohol consumption altogether.`;
            break;
        case 2:
            document.getElementById('finalscore').innerText += ` You are just not made for puking strategically. Consider stopping alcohol consumption altogether.`;
            break;
        case 3:
            document.getElementById('finalscore').innerText += ` You passed. You can start binge drinking without worrying about the consequences.`;
            break;
        case 4:
            document.getElementById('finalscore').innerText += ` You passed. You can start binge drinking without worrying about the consequences.`;
            break;
        case 5:
            document.getElementById('finalscore').innerText += ` You passed. You can start binge drinking without worrying about the consequences.`;
            break;
        default:
            break;
    }
    document.getElementById('finalscore').style.display = 'block';
}
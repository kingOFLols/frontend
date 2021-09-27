let images = Array.from(document.getElementsByClassName('display-image'))

function restartGame() {
    //console.log("inside function")
    //1- reset all images to cup image 
    for (let i = 0; i < images.length; i++) {
        document.getElementById(i+1).src = 'images/cup.jpg'
    }

    //2- reset game variables 
    win=false;
    wrongLives = 2 ;

    //3- find new random number 
    guessRandom()
}

let score = 0;
let correctAnswer;
let wrongLives = 2;
let win = false; 

function postToBackend(){
    postScore("someody",score)
}

//1- Get random number
function guessRandom() {
    correctAnswer = Math.ceil(Math.random() * 5)
    console.log(correctAnswer)
}

guessRandom()

//2- link every image with a clickable action 

console.log(images)

function correctAction() {

    //1- change the cup image into marble image 
    document.getElementById(correctAnswer).src = 'images/marble.jpg'
    //2- increase score
    score++;
    // console.log(score)
    document.getElementById("scoreValue").innerHTML = score

    //3- update win variable 
    win = true;
}

function wrongAction(index) {
    //1- change the cup image into X 
    document.getElementById(index).src = 'images/wrong.jpg'

    //2- decrease number of wrong lives 
    wrongLives--;
    console.log(wrongLives)
}





for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        // id = document.getElementById(i+1).id
        if (wrongLives != 0 && win==false) {
            if (correctAnswer == (i + 1)) {
                //  console.log("you are correct")
                correctAction();
            }
            else {
                // console.log("you are wrong")
                wrongAction(i + 1)
            }
        }

    });
}

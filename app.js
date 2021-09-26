function restartGame() {
    //console.log("inside function")
    for (let i = 0;i<images.length;i++)
    document.getElementById(i+1).src = "images/cup.jpg"
    win = false;
    wrongLives = 2;
    guessRandom()
}

let score = 0;
let correctAnswer;
let wrongLives = 2;
let win = false
console.log(wrongLives);
//1- Get random number
function guessRandom() {
    correctAnswer = Math.ceil(Math.random() * 5)
    console.log(correctAnswer)
}

guessRandom()

//2- link every image with a clickable action 
let images = Array.from(document.getElementsByClassName('display-image'))
console.log(images)
function correctAction() {
    document.getElementById(correctAnswer).src = "images/marble.jpg"
    win = true
    score++
    document.getElementById("scoreValue").innerHTML = score
}
function wrongAction(index) {
    document.getElementById(index).src = "images/wrong.jpg"
    wrongLives--;
}

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        // id = document.getElementById(i+1).id
        if (wrongLives != 0 && win == false) {
            if (correctAnswer == (i + 1)) {
                //console.log("you are correct")
                correctAction();

            }

            else {
                //console.log("you are wrong")
                wrongAction(i + 1);
            }
        }
    });
 
}
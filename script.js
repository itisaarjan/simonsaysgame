let body = document.querySelector("body");
let level = 0;
let userseq = [];
let gameseq = [];
let colors = ["red", "blue", "orange", "purple"];
let highestscore=0;

let started = false;
body.addEventListener("keypress", startGame);
body.addEventListener("click", startGame);
body.addEventListener("dblclick",startGame);
function startGame() {
    if (!started) {
        started = true;
        levelUp();
    }
}


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if(level>highestscore){
            highestscore=level;
        }
        document.querySelector("h2").innerHTML = `Game over! Your score was <b>${level}</b> <br>Press Any key to start Again<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Highest Score:${highestscore}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";

        },150)
        started = false;
        level = 0;
        gameseq = [];
        userseq = [];
    }
}

function levelUp() {
    userseq = [];
    level++;
    document.querySelector("h2").innerText = `Level ${level}`;
    let rn = Math.floor(Math.random() * 4); // Change to 4 to include 0-3
    let rc = colors[rn];
    let randbtn = document.querySelector(`#${rc}`);
    gameseq.push(rc); // Push the color string instead of the button element
    gameFlash(randbtn);
}

let allbtns = document.querySelectorAll(".box");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function btnpress() {
    let btn = this;
    userFlash(this);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let body = document.querySelector("body");
let level = 0;

body.addEventListener("keypress", function () {
    document.querySelector("h2").innerText = `Level ${level}`;
});

generator();

function generator() {
    let rn = Math.floor(Math.random() * 4);
    let colorElement;

    switch (rn) {
        case 0:
            colorElement = document.querySelector("#red");
            break;
        case 1:
            colorElement = document.querySelector("#blue");
            break;
        case 2:
            colorElement = document.querySelector("#orange");
            break;
        case 3:
            colorElement = document.querySelector("#purple");
            break;
    }

    if (colorElement) {
        setInterval(function () {
            colorElement.style.backgroundColor = '';
        }, 500);
    }
}

const smallBox = document.querySelector(".small-box");

let topPosition = 50;
let leftPosition = 50;

const step = 10;

function moveUp() {
    if (topPosition > 0) {
        topPosition -= step;
        smallBox.style.top = topPosition + "px";
    }
}

function moveDown() {
    if (topPosition < 650) {
        topPosition += step;
        smallBox.style.top = topPosition + "px";
    }
}

function moveLeft() {
    if (leftPosition > 0) {
        leftPosition -= step;
        smallBox.style.left = leftPosition + "px";
    }
}

function moveRight() {
    if (leftPosition < 650) {
        leftPosition += step;
        smallBox.style.left = leftPosition + "px";
    }
}

function resetBox() {
    topPosition = 50;
    leftPosition = 50;

    smallBox.style.top = topPosition + "px";
    smallBox.style.left = leftPosition + "px";
}


const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const btnArea = document.getElementById("button-area");
const love = document.getElementById("love");
const meToo = document.getElementById("me-too");

noBtn.addEventListener("mouseover", () => {
    const maxX = btnArea.clientWidth - noBtn.offsetWidth;
    const maxY = btnArea.clientHeight - noBtn.offsetHeight;

    const x = Math.random() + maxX;
    const y = Math.random() + maxY;

    noBtn.style.transition = "0.3s";

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

meToo.style.display = "none";

yesBtn.addEventListener("click", () => {
    love.remove();

    meToo.style.display = "block";
})

const loveBtn = document.getElementById("loveBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const message = document.getElementById("message");

loveBtn.addEventListener("click", function() {
    message.textContent = "I Love You So Much ❤️🥰";
});

yesBtn.addEventListener("click", function() {
    message.textContent = "Yay! I Love You Too! 💕😍";
});

noBtn.addEventListener("click", function() {
    message.textContent = "Please say Yes 🥺❤️";
});


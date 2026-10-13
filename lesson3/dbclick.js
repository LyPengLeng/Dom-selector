const image = document.getElementById("image");

image.addEventListener("dbclick", () => {
    image.classList.toggle("zoom");

    console.log("dbclick");
})

console.log("?")
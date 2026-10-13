const color_id = document.getElementById("color_id");

color_id.addEventListener("Click", () => {

    if (color_id.style.color == "red") {
        color_id.style.color = "black";
        color_id.textContent = "Change Red";
        console.log(color_id.style.color);
    } else {
        color_id.textContent = "Change Black";
        color_id.style.color = "red";
        console.log(color_id.style.color);
    }
})
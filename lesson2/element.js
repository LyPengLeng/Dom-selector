const count = document.getElementById("count");

// count.textcontent = "Count: 1";

const button = document.getElementById("btn");

let counter = 0;

button.addEventListener("click", function() {
    counter++;  // counter = counter + 1

    console.log(counter);
    count.textContent = `Count: ${counter}`;

})

const btn_dok = document.getElementById("btn_dok");
btn_dok.addEventListener("click", () => {
    counter -=2;
    count.textContent = `Count: ${counter}`;
})



















let temperature = 35;

const temperatureElement = document.getElementById("temperature");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");


function updateTemperature() {

    temperatureElement.textContent = temperature + "°C";

    if (temperature >= 40) {

        temperatureElement.style.backgroundColor =
            "rgb(255, 200, 100)";

    }
    else if (temperature >= 35) {

        temperatureElement.style.backgroundColor =
            "rgb(255, 255, 255)";

    }
    else if (temperature >= 30) {

        temperatureElement.style.backgroundColor =
            "rgb(255, 225, 225)";

    }
    else if (temperature >= 25) {

        temperatureElement.style.backgroundColor =
            "rgb(255, 200, 200)";

    }
    else if (temperature >= 20) {

        temperatureElement.style.backgroundColor =
            "rgb(255, 150, 150)";

    }
    else if (temperature >= 15) {

        temperatureElement.style.backgroundColor =
            "rgb(255, 125, 125)";

    }
    else if (temperature >= 10) {

        temperatureElement.style.backgroundColor =
            "rgb(255, 100, 100)";

    }
    else {

        temperatureElement.style.backgroundColor =
            "rgb(255, 0, 0)";
    }
}

// − button
minusButton.addEventListener("click", function () {

    temperature-= 1;

    updateTemperature();

});


// + button
plusButton.addEventListener("click", function () {

    temperature+= 1;

    updateTemperature();

});


// Run when page starts
updateTemperature();
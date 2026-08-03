const input = document.getElementById("temperature");
const unit = document.getElementById("unit");
const btn = document.getElementById("convertBtn");

const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const error = document.getElementById("error");

btn.addEventListener("click", function () {

    let temp = parseFloat(input.value);

    // Check for empty or invalid input
    if (isNaN(temp)) {
        error.innerText = "Please enter a valid temperature.";
        celsius.innerText = "-- °C";
        fahrenheit.innerText = "-- °F";
        kelvin.innerText = "-- K";
        return;
    }
    let c, f, k;

    if (unit.value === "celsius") {
        c = temp;
        f = (temp * 9 / 5) + 32;
        k = temp + 273.15;
    }

    else if (unit.value === "fahrenheit") {
        c = (temp - 32) * 5 / 9;
        f = temp;
        k = c + 273.15;
    }

    else {
        c = temp - 273.15;
        f = (c * 9 / 5) + 32;
        k = temp;
    }

    if (c < -273.15) {
        error.innerText = "Temperature cannot be below absolute zero.";
        celsius.innerText = "-- °C";
        fahrenheit.innerText = "-- °F";
        kelvin.innerText = "-- K";
        return;
    }

    error.innerText = "";

    celsius.innerText = c.toFixed(2) + " °C";
    fahrenheit.innerText = f.toFixed(2) + " °F";
    kelvin.innerText = k.toFixed(2) + " K";
});

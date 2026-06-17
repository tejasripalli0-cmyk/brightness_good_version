const slider = document.getElementById("brightnessSlider");
const brightnessValue = document.getElementById("brightnessValue");
const previewBox = document.getElementById("previewBox");

slider.addEventListener("input", function () {

    let value = slider.value;

    brightnessValue.textContent =
        "Brightness: " + value + "%";

    previewBox.style.filter =
        `brightness(${value}%)`;
});

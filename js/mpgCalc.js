function isValid() {
    var isAllDataValid = true;
    var milesBox = (document.getElementById("miles"));
    var milesDriven = milesBox.value;
    if (milesDriven == "" || isNaN(parseFloat(milesDriven))) {
        isAllDataValid = false;
        milesBox.nextElementSibling.innerHTML =
            "Miles driven is required and must be a number";
    }
    return isAllDataValid;
}
function main() {
    if (isValid()) {
        var miles = document.getElementById("miles")
            .value;
        var gallons = document.getElementById("gallons")
            .value;
        var mpg = calculateMPG(parseFloat(miles), parseFloat(gallons));
        displayResults(mpg);
    }
}
function displayResults(milesPerGallon) {
    var mpgBox = (document.getElementById("mpg"));
    mpgBox.value = milesPerGallon.toString();
}
function calculateMPG(milesDriven, gallonsUsed) {
    var mpg = milesDriven / gallonsUsed;
    return mpg;
}
function resetForm() {
    var allBoxes = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < allBoxes.length; i++) {
        var currBox = allBoxes[i];
        currBox.value = "";
    }
    var allSpans = document.querySelectorAll("span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        currSpan.innerHTML = "";
    }
}

function clearDoubleClick() {
    var mpgBox = document.getElementById("miles");
    mpgBox.value = "";
    var gallonsBox = document.getElementById("gallons");
    gallonsBox.value = "";
}
window.onload = function () {
    var calcBtn = document.getElementById("calculate");
    calcBtn.onclick = main;
    var clearBtn = document.getElementById("clear");
    clearBtn.onclick = resetForm;
    var milesBox = document.getElementById("miles");
    milesBox.ondblclick = clearDoubleClick;
};

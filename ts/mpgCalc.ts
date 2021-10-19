/**
 * Checks if form data is valid
 * @returns Returns true if all data is valid on the form, or false is something is invalid
 */
function isValid(): boolean {
  let allDataValid = true;
  // validate miles driven, display error if invalid
  let milesBox: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("miles")
  );
  let milesDriven: string = milesBox.value;

  if (milesDriven == "" || isNaN(parseFloat(milesDriven))) {
    allDataValid = false;
    milesBox.nextElementSibling.innerHTML =
      "Miles driven is required and must be a number";
  }

  return allDataValid;
}

/**
 * This function should be called when the calculate button is clicked
 */

function main() {
  if (isValid()) {
    let miles: string = (<HTMLInputElement>document.getElementById("miles"))
      .value;

    let gallons: string = (<HTMLInputElement>document.getElementById("gallons"))
      .value;

    let mpg = calculateMPG(parseFloat(miles), parseFloat(gallons));
    displayResults(mpg);
  }

  //check if data is valid
  //if data is valid
  //calculate MPG
}

/**
 * Displays given MPG on the form
 * @param milesPerGallon Number containing the miles per gallon
 */
function displayResults(milesPerGallon: number): void {
  //get <input> element containing mpg
  //Must cast as <HTMLInputElement> otherwise getElementById
  // return HTMLElement which does not have a .value
  let mpgBox: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("mpg")
  );
  mpgBox.value = milesPerGallon.toString();
}

/**
 * Calculates miles per gallon
 * @param {number} milesDriven The number of miles driven
 * @param {number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven: number, gallonsUsed: number): number {
  //calculate MPG
  //return the MPG as a number
  let mpg: number = milesDriven / gallonsUsed;
  return mpg;
}

function resetForm(): void {
  // clear out all textboxes
  let allBoxes = document.querySelectorAll("input[type=text]");
  for (let i = 0; i < allBoxes.length; i++) {
    let currBox = <HTMLInputElement>allBoxes[i];
    currBox.value = "";
  }

  // reset <span> text
  let allSpans = document.querySelectorAll("span");
  for (let i = 0; i < allSpans.length; i++) {
    let currSpan = <InnerHTML>allSpans[i];
    currSpan.innerHTML = "";
  }
}

//TODO: Add a function to Miles Driven and Gallons of gas used to clear out the inputs
//      They can clear out both textboxes or just the textbox that triggers the double click event

function clearDoubleClick() {
  let mpgBox = <HTMLInputElement>document.getElementById("miles");

  mpgBox.value = "";

  let gallonsBox = <HTMLInputElement>document.getElementById("gallons");

  gallonsBox.value = "";
}

window.onload = function () {
  let calcBtn: HTMLElement = document.getElementById("calculate");
  calcBtn.onclick = main;

  let clearBtn: HTMLElement = document.getElementById("clear");
  clearBtn.onclick = resetForm;

  let milesBox = document.getElementById("miles");

  milesBox.ondblclick = clearDoubleClick;
};

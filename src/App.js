import { setupDropDown } from './components/DropDown.js';

export const setupApp = () => {
    const appElement = document.getElementById("app");
    console.log("appElement:", appElement); // Add this line for debugging

    const newLines = document.createElement("br");

    const labelInputElement = document.createElement("label");
    labelInputElement.setAttribute("for", "søgKommuneInput");

    const inputElement = document.createElement("input");
    inputElement.setAttribute("id", "søgKommuneInput");
    console.log("inputElement:", inputElement); // Add this line for debugging

    const labelSelectElement = document.createElement("label");
    labelSelectElement.setAttribute("for", "ddKommuner");

    const selectElement = document.createElement("select");
    selectElement.setAttribute("id", "ddKommuner");

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "pbFetchKommuner");
    buttonElement.textContent = "Fyld DropDown";

    labelInputElement.appendChild(inputElement);
    labelSelectElement.appendChild(selectElement);
    appElement.appendChild(labelInputElement);
    appElement.appendChild(newLines)
    appElement.appendChild(labelSelectElement);
    appElement.appendChild(buttonElement);
}

document.addEventListener("DOMContentLoaded", () => {
    setupApp();
    setupDropDown();
});

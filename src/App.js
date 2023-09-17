import { setupDropDown } from './components/DropDown.js';

export const setupApp = () => {
    const appElement = document.getElementById("app");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", "ddKommuner");

    const selectElement = document.createElement("select");
    selectElement.setAttribute("id", "ddKommuner");

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "pbFetchKommuner");
    buttonElement.textContent = "Fyld DropDown";

    labelElement.appendChild(selectElement);
    appElement.appendChild(labelElement);
    appElement.appendChild(buttonElement);
}

document.addEventListener("DOMContentLoaded", () => {
    setupApp();
    setupDropDown();
});

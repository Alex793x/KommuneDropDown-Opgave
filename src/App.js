document.addEventListener("DOMContentLoaded", () => {
    setupApp();
})

export const setupApp =() => {
    const appElement = document.getElementById("app");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", "ddKomuner");

    const selectElement = document.createElement("select");
    selectElement.setAttribute("id", "ddKomuner");

    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", "pbFetchKommuner");

    labelElement.appendChild(selectElement);
    appElement.appendChild(labelElement);
    appElement.appendChild(buttonElement);
}

document.addEventListener("DOMContentLoaded", setupApp);



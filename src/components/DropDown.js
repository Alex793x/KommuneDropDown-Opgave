export const urlKommune = "https://api.dataforsyningen.dk/kommuner";

export const setupDropDown = () => {
    const selectElement = document.getElementById("ddKommuner");
    const buttonElement = document.getElementById("pbFetchKommuner");

    buttonElement.addEventListener("click", async() => {
        const kommune = await fetchKommune(urlKommune, selectElement);
        console.log("this is kommune:", kommune);
    });
}

export const fetchKommune = async (url, selectElement) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Fetch Error: ${response.statusText}`);
    }
    const data = await response.json(); // Await for the JSON data.
    await addKommuneNameForSelect(data, selectElement);
}


const addKommuneNameForSelect = (data, selectToFill) => {
    data.forEach((item) => {
        if (item.hasOwnProperty("navn")) {
            const option = document.createElement("option");
            option.textContent = item.navn.toString();
            selectToFill.appendChild(option);
        }
    });
}


export const urlKommune = "https://api.dataforsyningen.dk/kommuner";

export const setupDropDown = () => {
    const selectElement = document.getElementById("ddKommuner");
    const buttonElement = document.getElementById("pbFetchKommuner");

    buttonElement.addEventListener("click",
        async() => await fetchKommune(urlKommune, selectElement));
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
    data.forEach((item, index) => {
        if (item.hasOwnProperty("navn")) {
            const option = document.createElement("option");
            option.textContent = item.navn.toString();
            option.value = index;
            option.href = item.href;
            console.log(option.href)
            selectToFill.appendChild(option);
        }
    });
}

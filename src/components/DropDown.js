export const urlKommune = "https://api.dataforsyningen.dk/kommuner";

export const setupDropDown = () => {
    const selectElement = document.getElementById("ddKommuner");
    const buttonElement = document.getElementById("pbFetchKommuner");

    buttonElement.addEventListener("click", async () => {
        await fetchKommune(urlKommune, selectElement);
    });

    selectElement.addEventListener("change", () => {
        addKommuneHref(selectElement);
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
    data.forEach((item, index) => {
        if (item.hasOwnProperty("navn")) {
            const option = document.createElement("option");
            option.textContent = item.navn.toString();
            option.value = index;
            option.dataset.href = item.href; // Store the href as a data attribute
            selectToFill.appendChild(option);
        }
    });
}

const addKommuneHref = (selectElement) => {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const href = selectedOption.dataset.href; // Retrieve href from data attribute
    if (href) {
        const anchor = document.createElement("a");
        anchor.textContent = selectedOption.text.toString();
        anchor.href = href; // Set the href for the anchor element
        anchor.target = "_blank"; // Open the link in a new tab
        const newLine = document.createElement("br");
        const appElement = document.getElementById("app");
        appElement.appendChild(newLine);
        appElement.appendChild(anchor);
    }
}

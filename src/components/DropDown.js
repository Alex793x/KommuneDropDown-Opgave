export const urlKommune = "https://api.dataforsyningen.dk/kommuner";
let usedKommuner = [];

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
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex];
    const href = selectedOption.dataset.href;
    if (href && !usedKommuner.includes(selectedIndex)) {
        usedKommuner.push(selectedIndex);
        const anchor = document.createElement("a");
        anchor.textContent = selectedOption.text.toString();
        anchor.href = href;
        anchor.target = "_blank";
        const newLine = document.createElement("br");
        const appElement = document.getElementById("app");
        appElement.appendChild(newLine);
        appElement.appendChild(anchor);
    }
}

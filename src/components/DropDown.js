export const urlKommune = "https://api.dataforsyningen.dk/kommuner";

export const setupDropDown = () => {
    const selectElement = document.getElementById("ddKommuner");
    const buttonElement = document.getElementById("pbFetchKommuner");

    buttonElement.addEventListener("click", async() => {
        const kommune = await fetchKommune(urlKommune);
        console.log("this is kommune:", kommune);
    });
}

export const fetchKommune = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        console.log(response.json())
        throw new Error(`Fetch Error: ${response.statusText}`);
    }
    return await response.json();
}


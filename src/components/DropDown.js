import axios from "https://cdn.skypack.dev/axios";

export const urlKommune = "https://api.dataforsyningen.dk/kommune";

export const setupDropDown = () => {
    const selectElement = document.getElementById("ddKommuner");
    const buttonElement = document.getElementById("pbFetchKommuner");

    buttonElement.addEventListener("click", async() => {
        const kommune = await fetchKommune(urlKommune);
        console.log(kommune);
    });
}

export const fetchKommune = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

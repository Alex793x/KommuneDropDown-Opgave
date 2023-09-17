import axios from "https://cdn.skypack.dev/axios";
jest.mock('axios');

const setupApp = require("../../src/App.js").setupApp;
import {fetchKommune, urlKommune} from "../../src/components/DropDown";

let appElement;

describe('MyDropDown', () => {

    // Run before each test
    beforeEach(() => {
        appElement = document.createElement('div');
        appElement.id = 'app';
        document.body.appendChild(appElement);
        axios.get.mockResolvedValue({ data: 'some data' });

        // Call setupApp to populate 'app' div
        setupApp();
    });

    // Run after each test
    afterEach(() => {
        document.body.removeChild(appElement);
    });

    // Individual test case
    it('should be able to retrieve my app div by the id', () => {
        const element = document.getElementById("app");
        expect(element).not.toBeNull();
    });

    it('should be able to retrieve my dropdown by label and selection, with id', () => {
        const selectElement = document.getElementById("ddKommuner");
        const labelElement = document.querySelector(`label[for="${selectElement.id}"]`);
        expect(labelElement).not.toBeNull();
        expect(labelElement.getAttribute("for")).toBe("ddKommuner");
    });

    it('should be able to fetch kommune as JSON', async () => {
        const data = await fetchKommune(urlKommune);
        expect(data).toBe('some data');
    });


});

describe('MyButton for MyDropDown', () => {

    beforeEach(() => {
        appElement = document.createElement('div');
        appElement.id = "app";
        document.body.appendChild(appElement);

        setupApp();
    });

    afterEach(() => {
        document.body.removeChild(appElement);
    });

    it('should be able to retrieve button for MyDropDown', () => {
        const buttonElement = document.getElementById("pbFetchKommuner");
        expect(buttonElement).not.toBeNull();
    });




});

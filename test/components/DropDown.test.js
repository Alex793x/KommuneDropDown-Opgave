const setupApp = require("../../src/App.js").setupApp;
import {fetchKommune, urlKommune} from "../../src/components/DropDown";
import fetchMock from 'jest-fetch-mock';
// Mock the fetch function using jest.mock
jest.mock('node-fetch');
let appElement;

describe('MyDropDown', () => {

    // Run before each test
    beforeEach(() => {
        appElement = document.createElement('div');
        appElement.id = 'app';
        document.body.appendChild(appElement);

        // Call setupApp to populate 'app' div
        setupApp();
    });

    // Run after each test
    afterEach(() => {
        document.body.removeChild(appElement);
    });

    beforeAll(() => {
        // Configure fetchMock to intercept fetch calls
        fetchMock.enableMocks();
    });

    afterAll(() => {
        // Restore fetch to its original implementation
        fetchMock.mockRestore();
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

    it('fetches successfully data from an API', async () => {
        const mockData = { someKey: 'someValue' };

        // Set up the fetch mock implementation
        fetchMock.mockResponseOnce(JSON.stringify(mockData), { status: 200 });

        const result = await fetchKommune(urlKommune);

        expect(fetch).toHaveBeenCalledWith(urlKommune);
        expect(result).toEqual(mockData);
    });

    it('handles fetch error', async () => {
        // Set up the fetch mock implementation for an error
        fetchMock.mockRejectOnce(new Error('Fetch Error'));

        await expect(fetchKommune(urlKommune)).rejects.toThrow('Fetch Error');
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

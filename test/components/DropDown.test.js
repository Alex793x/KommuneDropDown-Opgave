const setupApp = require("../../src/App.js").setupApp;

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

    // Individual test case
    it('should be able to retrieve my app div by the id', () => {
        const element = document.getElementById("app");
        expect(element).not.toBeNull();
    });

    it('should be able to retrieve my dropdown by label and selection, with id', () => {
        const selectElement = document.getElementById("ddKomuner");
        const labelElement = document.querySelector(`label[for="${selectElement.id}"]`);
        expect(labelElement).not.toBeNull();
        expect(labelElement.getAttribute("for")).toBe("ddKomuner");
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

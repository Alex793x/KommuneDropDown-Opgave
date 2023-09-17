const axios = require('axios');

describe('Api should retrieve a json format', () => {
    it('should fetch and verify it is a JSON format', async () => {
        const urlKommune = 'https://api.dataforsyningen.dk/kommuner';

        const response = await axios.get(urlKommune);
        const data = response.data;

        expect(typeof data).toBe('object');
    });
});
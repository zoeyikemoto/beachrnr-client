const axios = require('axios');
require('dotenv').config();

const host = process.env.SEARCH_SERVICE_HOST || 'localhost';
const port = 3001;

module.exports = {
  getSearchResult: (location, callback) => {
    const url = `${host}:${port}/api/listing/${location}`;
    axios.get(url)
      .then(response => callback(response.data))
      .catch(err => console.log(err));
  }
};

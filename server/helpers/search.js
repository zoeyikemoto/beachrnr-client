const axios = require('axios');

module.exports = {
  getSearchResult: (location, callback) => {
    const url = `http://localhost:3001/api/listing/${location}`;
    axios.get(url)
      .then(response => callback(response.data))
      .catch(err => console.log(err));
  }
};

const axios = require('axios');

module.exports = {
  fetchListings: (location) => {
    const encodedUri = encodeURI(`/api/listing/${location.toLowerCase()}`);
    return axios.get(encodedUri)
      .then(response =>
        response.data)
      .catch(err => console.log(err));
  }
};

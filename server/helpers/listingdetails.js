const axios = require('axios');

module.exports = {
  // getListingById: (roomId, callback) => {
  //   var url = 'http://localhost:3004/rooms/';
  //   axios.get(url)
  //     .then(response => callback(response.data))
  //     .catch(err => console.log(err));
  // }
  getListingById: (roomId) => {
    const url = 'http://localhost:3004/rooms/' + roomId;
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

};

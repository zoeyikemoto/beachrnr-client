var axios = require('axios');

module.exports = {
  fetchReviews: (listingId, cb) => {
    let url = `http://localhost:3003/rooms/${listingId}/reviews/content`;
    return axios.get(url)
      .then(response => {cb(response.data)})
      .catch(err => console.log(err));
  },

  fetchRatingNReviewCount: (listingId, cb) => {
    let url = `http://localhost:3003/rooms/${listingId}/reviews/ratingnreviewcount`;
    return axios.get(url)
      .then(response => cb(response.data))
      .catch(err => console.log(err));
  },

  fetchRatings: (listingId, cb) => {
    let url = `http://localhost:3003/rooms/${listingId}/reviews/ratings`;
    return axios.get(url)
      .then(response => cb(response.data))
      .catch(err => console.log(err));
  },
}
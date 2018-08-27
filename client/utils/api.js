const axios = require('axios');

module.exports = {
  fetchListings: (location) => {
    let encodedUri = encodeURI(`/api/listing/${location.toLowerCase()}`);
    return axios.get(encodedUri)
      .then(response =>
        response.data)
      .catch(err => console.log(err));
  },

  fetchReviews: (listingId) => {
    let encodedUri = encodeURI(`http://ec2-54-67-103-194.us-west-1.compute.amazonaws.com/rooms/${listingId}/reviews/content`);
    return axios.get(encodedUri)
      .then(response =>
        response.data)
      .catch(err => console.log(err));
  },


  fetchRatingNReviewCount: (listingId) => {
    let encodedUri = encodeURI(`http://ec2-54-67-103-194.us-west-1.compute.amazonaws.com/rooms/${listingId}/reviews/ratingnreviewcount`);
    return axios.get(encodedUri)
      .then(response =>
        response.data)
      .catch(err => console.log(err));
  },

  fetchRatings: (listingId) => {
    let encodedUri = encodeURI(`http://ec2-54-67-103-194.us-west-1.compute.amazonaws.com/rooms/${listingId}/reviews/ratings`);
    return axios.get(encodedUri)
      .then(response =>
        response.data)
      .catch(err => console.log(err));
  },

  fetchById: (listingId) => {
    let encodedUri = encodeURI(`/api/rooms/${listingId}`);
    return axios.get(encodedUri)
      .then(response =>
        response.data)
      .catch(err => console.log(err));
  }
};

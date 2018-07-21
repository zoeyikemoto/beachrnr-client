import faker from 'faker';

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();

var fullReviewList = [];
for(var i = 0; i <=580; i++) {
  let review = {
    'user_id': faker.random.number(),
    'user_name': faker.name.findName(),
    'review_id': faker.random.number(),
    'user_avatar': faker.image.avatar(),
    'review_date': faker.date.past().toString().split(' ').slice(0,4).join(' '),
    'review_content': faker.lorem.paragraph(),
  };
  fullReviewList.push(review);

};


const listingRatings = {"Accuracy":5,"Location":5,"Communication":5,"Checkin":5,"Cleanliness":5,"Value":5};


export {fullReviewList as fullReviewList, listingRatings as listingRatings};

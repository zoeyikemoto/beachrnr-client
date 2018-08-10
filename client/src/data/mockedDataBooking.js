import moment from 'moment';

const bookings = {};
const bookedDates = {};

let listingID = 2912000;
let bookingID = 1;
let userID = 1;

for (let i = 0; i < 100; i++) {
  const adultGuests = getRandomIntInclusive(1, 5);
  const childrenGuests = getRandomIntInclusive(0, 3);
  const infantGuests = getRandomIntInclusive(0, 2);
  const price = getRandomIntInclusive(35, 100) * (adultGuests + childrenGuests);

  bookings[listingID] = [
    {
      id: bookingID,
      listingID: listingID,
      userID: userID,
      price: price,
      adultGuests: adultGuests,
      childrenGuests: childrenGuests,
      infantGuests: infantGuests
    }
  ];
  
  bookedDates[listingID] = {};

  const checkIn = getRandomIntInclusive(1, 89);
  const checkOut = getRandomIntInclusive(2, 10) + checkIn;

  for (let day = checkIn; day <= checkOut; day++) {
    const date = moment().add(day, 'days').format('YYYYMMDD');
    bookedDates[listingID][date] = {
      id: day,
      listingID: listingID,
      date: date
    };
  }

  bookingID++;
  listingID++;
  userID++;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export { bookings, bookedDates };
import React from 'react';
import ReactDOM from 'react-dom';
import { details } from '../../data/mockpagedetail.js';
import style from '../../styles/listingdetails.css';


class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: details
    }
  }

  // componentDidMount() {
  //   this.reportHandler = this.reportHandler.bind(this);
  // }

  // reportHandler(e) {
  //   console.log('flag has been clicked');
  // }

  render(props) {
    return (
      <div>
        <img src = 'https://a0.muscache.com/im/pictures/50616050/43df6979_original.jpg'></img>
        <div>
          <h1>Beautiful Guest Suite for 2</h1>
          <h3>Seattle, Washington</h3>
        </div>
        <div>
          <h4>1 Bedroom  Condominium</h4>
          <h4> $70.00 per night</h4>
        </div>
        <div>
          <p>This lovely, modern room and ensuite bath is detached from the main house, so you can enjoy privacy and quiet. We are a 5 min drive from Ballard and a 15 min drive from downtown. Welcome to our quiet, safe neighborhood!</p>
        </div>
      </div>

      )
  }
};


export default ListingPage;


// module.exports = {
//       id: 222989,
//       unitName: 'Beautiful Guest Suite for 2',
//       unitImage: 'https://a0.muscache.com/im/pictures/50616050/43df6979_original.jpg',
//       hostId: 3062517,
//       hostName: 'Debbie',
//       isSuprhost: false,
//       unitAddress: 'Seattle, United States',
//       neighbourhood_cleansed: 'Seattle',
//       city: 'Seattle',
//       state: 'WA',
//       country_code: 'US',
//       property_type: 'Condominium',
//       room_type: 'Entire Guest Suite',
//       beds: 1,
//       unitPrice: '$70.00',
//       priceModifier: 'per night',
//       numberOfReviews: 581,
//       reviewScoresRating: 5,
//       freeCancellation: true,
//       description_short: 'This lovely, modern room and ensuite bath is detached from the main house, so you can enjoy privacy and quiet. We are a 5 min drive from Ballard and a 15 min drive from downtown. Welcome to our quiet, safe neighborhood!',
//       //description_long: tbd
//       //house_rules: tbd
//       //cancellation_policy: tbd
//       //about_neighborhood: tbd
// };
// //expor

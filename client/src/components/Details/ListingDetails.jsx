import React from 'react';
import ReactDOM from 'react-dom';
import { details } from '../../data/mockpagedetail.js';
import styled from 'styled-components';

const MainImage = styled.div`

`;

const MainContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const Title = styled.h1`
`;

const Description = styled.div`
  width: 80%;
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-width: 1px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

class ListingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }




  render(props) {
    const data = this.props.data;
    return (
      <div>
        <MainImage style={ {
          backgroundImage: 'url('+data.unitImage+')',
          height: '500px',
          width: '100%',
          backgroundRepeat:'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%'
        } }>

        </MainImage>
        <MainContainer>
          <Title>{data.unitName}</Title>
          <h3>{data.city}, {data.state}</h3>
          <h4>{data.beds} Bedroom  {data.property_type}</h4>
          <h4>{data.unitPrice} {data.priceModifier}</h4>
          <Description>
            <p>{data.description_short}</p>
          </Description>
          <Description>
            <h3>Amenities</h3>
            <ul>
              <li>
                Wifi
              </li>
              <li>
                Cable TV
              </li>
              <li>
                Air conditioning
              </li>
              <li>
                Laptop friendly workspace
              </li>
              <li>
                TV
              </li>
              <li>
                Iron
              </li>
            </ul>
          </Description>
          <Description>
            <h3>House Rules</h3>
            <ul>
              <li>
                Not safe or suitable for children (0-12 years)
              </li>
              <li>
                No smoking
              </li>
              <li>
                Not suitable for pets
              </li>
              <li>
                No parties or events
              </li>
              <li>
                Check-in is anytime after 4PM
              </li>
              <li>
                Check out by 11AM
              </li>
            </ul>
          </Description>
        </MainContainer>
      </div>
      )
  }
};


export default ListingDetails;


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

  //   this.reportHandler = this.reportHandler.bind(this);
  // }
  // componentDidMount() {
  // reportHandler(e) {

  //   console.log('flag has been clicked');
  // }
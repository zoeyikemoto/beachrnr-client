import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar.jsx';
import ListingPage from './Details/ListingPage.jsx';
import Booking from './Booking/Booking.jsx';
import Review from './Review/Review.jsx';

const Div = styled.div`
  margin-top: 90px;
`;

const MainLayout = (props) => {
  console.log("Listing ID in mainlayout: " + props.match.params.id);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Div>
        <ListingPage listingId={props.match.params.id}/>
        <Booking />
        <Review />
      </Div>
    </div>
  )
}

export default MainLayout;
import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar/Navbar.jsx';
import ListingPage from './Details/ListingPage.jsx';
import Booking from './Booking/Booking.jsx';
import Review from './Review/Review.jsx';

const Div = styled.div`
  margin: 90px 1rem 0 1rem;
`;

const MainLayout = () => {
  return (
    <React.Fragment> 
      <div>
        <Navbar />
      </div>
      <Div>
        <ListingPage />
        <Booking /> 
        <Review />
      </Div>
    </React.Fragment>
  )
};

export default MainLayout;
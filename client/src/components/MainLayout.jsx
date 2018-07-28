import React from 'react';
import styled from 'styled-components';
import { details } from '../data/mockpagedetail.js';
import Navbar from './Navbar/Navbar.jsx';
import ListingPage from './Details/ListingPage.jsx';
import Booking from './Booking/Booking.jsx';
import Review from './Review/Review.jsx';

const Div = styled.div`
  margin-top: 90px;
`;

const MainLayout = (props) => {
  let currentListing = details.find(function(listing) {
    return listing.id+"" === props.match.params.id;
  });
  if(currentListing) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Div>
        <ListingPage {...props} listingId = {props.match.params.id} currentListing = {currentListing}/>
        <Booking {...props} listingId = {props.match.params.id}/>
        <Review {...props} listingId = {props.match.params.id}/>
      </Div>
    </div>
  )
} else {
  return (<p>Listing not found.</p>);
}
}

export default MainLayout;
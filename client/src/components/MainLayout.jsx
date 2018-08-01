import React from 'react';
import styled from 'styled-components';
import { details } from '../data/mockpagedetail.js';
import { Grid } from 'semantic-ui-react';

import Navbar from './Navbar/Navbar.jsx';
import ListingPage from './Details/ListingPage.jsx';
import Booking from './Booking/Booking.jsx';
import Review from './Review/Review.jsx';

const Div = styled.div`
  margin: 90px auto 0 auto;
  max-width: 1080px;
  padding: 0 1rem;
`;

const MobileBookingWrapper = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;

const MainLayout = (props) => {
  let currentListing = details.find(function(listing) {
    return listing.id+"" === props.match.params.id;
  });
  if(currentListing) {
    return (
      <React.Fragment>
        <div>
          <Navbar />
        </div>
        <Div>
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={16} largeScreen={9} widescreen={9}>
                <ListingPage {...props} listingId={props.match.params.id} currentListing={currentListing} />
                <MobileBookingWrapper><Booking {...props} listingId={props.match.params.id} /></MobileBookingWrapper>
                <Review {...props} listingId={props.match.params.id} />
              </Grid.Column>
              <Grid.Column largeScreen={7} only="large screen">
                <Booking {...props} listingId={props.match.params.id} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>
      </React.Fragment>
    )
  } else {
    return (<p>Listing not found.</p>);
  }
};

export default MainLayout;
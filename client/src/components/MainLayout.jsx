import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Sticky } from 'semantic-ui-react';

import Navbar from './Navbar/Navbar.jsx';
import ListingPage from './Details/ListingPage.jsx';
import Booking from './Booking/Booking.jsx';
import Review from './Review/Review.jsx';
import api from '../../utils/api';

const Div = styled.div`
  margin: 90px auto 0 auto;
  max-width: 1080px;
  padding: 0 1rem;
`;

const MobileBookingWrapper = styled.div`
  margin: 3rem auto;

  @media (min-width: 1200px) {
    display: none;
  }
`;

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleStickyContextRef = this.handleStickyContextRef.bind(this);
  }

  handleStickyContextRef(context) {
    this.setState({
      stickyContextRef: context
    });
  }

  componentDidMount() {
    let listingId = this.props.match.params.id;
    api.fetchById(listingId)
    .then(data => {
      this.setState({
        currentListing: data
      })
    }, err => console.log(err));
  }

  render() {

    if(this.state.currentListing) {
      return (
        <React.Fragment>
          <div>
            <Navbar />
          </div>
          <Div>
            <div ref={this.handleStickyContextRef}>
              <Grid>
                <Grid.Row>
                  <Grid.Column mobile={16} tablet={16} largeScreen={9} widescreen={9}>
                    <ListingPage {...this.props} listingId={this.props.match.params.id} currentListing={this.state.currentListing} />
                    <MobileBookingWrapper><Booking {...this.props} listingId={this.props.match.params.id} /></MobileBookingWrapper>
                    <Review {...this.props} listingId={this.props.match.params.id} />
                  </Grid.Column>
                  <Grid.Column largeScreen={7} only="large screen">
                    <Sticky context={this.state.stickyContextRef} offset={120}><Booking {...this.props} listingId={this.props.match.params.id} /></Sticky>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Div>
        </React.Fragment>
      )
    } else {
      return (<p>Listing not found.</p>);
    }
  }
}

export default MainLayout;
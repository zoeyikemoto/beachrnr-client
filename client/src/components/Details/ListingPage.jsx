import React from 'react';
import ReactDOM from 'react-dom';
import { details } from '../../data/mockpagedetail.js';
import style from '../../styles/listingdetails.css';
import ListingDetails from './ListingDetails.jsx';
import styled from 'styled-components';

const ListingPage = (props) => {
  console.log("Listing ID in listingpage: " + props.listingId);
  var currentListing = details.find(function(listing) {
    return listing.id+"" === props.listingId;
  });
  if(currentListing) {
    return (
      <ListingDetails {...props} data={currentListing} />
      )
  } else {
    return (
      <p>Listing not found.</p>
    )
  }


}


export default ListingPage;
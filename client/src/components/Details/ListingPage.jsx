import React from 'react';
import ReactDOM from 'react-dom';
import style from '../../styles/listingdetails.css';
import { details } from '../../data/mockpagedetail.js';
import ListingDetails from './ListingDetails.jsx';
import styled from 'styled-components';

const ListingPage = (props) => {

    return (
      <ListingDetails {...props} data={props.currentListing} />
      )



}


export default ListingPage;
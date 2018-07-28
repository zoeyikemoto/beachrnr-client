import React from 'react';
import ReactDOM from 'react-dom';
import { details } from '../../data/mockpagedetail.js';
import style from '../../styles/listingdetails.css';
import ListingDetails from './ListingDetails.jsx';
import styled from 'styled-components';


class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: details
    }
  }

  render(props) {
    return (
      <ListingDetails data={details[0]} />
      )
  }
};


export default ListingPage;
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

  // componentDidMount() {
  //   this.reportHandler = this.reportHandler.bind(this);
  // }

  // reportHandler(e) {
  //   console.log('flag has been clicked');
  // }

  render(props) {
    return (
      <ListingDetails data={details} />
      )
  }
};


export default ListingPage;
import React from 'react';
import ReactDOM from 'react-dom';
import { details } from '../../data/mockpagedetail.js';
import style from '../../styles/listingdetails.css';
import ListingDetails from './ListingDetails.jsx';
import styled from 'styled-components';


// class ListingPage extends React.Component {

//     this.state = {
//       data: details
//     }
//   }

//   render(props) {
const ListingPage = (props) => {
console.log("Listing ID in listingpage: " + props.match.params.id);
    return (
      <ListingDetails data={details[0]} />
      )
}


export default ListingPage;
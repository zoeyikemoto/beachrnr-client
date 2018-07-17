import React from 'react';
import ReactDOM from 'react-dom';
import ReactStars from 'react-stars';
import {reviewList, listingRatings} from '../data/mock-data-review.js';
import ReviewItem from './Reviewitem.jsx';
import styled from 'styled-components';

const ReviewCount = styled.h2`
  float: left;
`;

const ReviewPanel = styled.div`
  clear: both;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'reviewList': reviewList
    }
  }

  render() {
    return (
      <div>

        <div>
          <ReviewCount>580 Reviews</ReviewCount>
          <ReactStars count={5} size={30} value ={5} color2={'#137269'} edit={false}/>
        </div>

        <ReviewPanel>
          <span style={{'float': 'left'}}>Accuracy</span>
          <ReactStars count={5} size={24} value={listingRatings.Accuracy} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Location</span>
          <ReactStars count={5} size={24} value={listingRatings.Location} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Communication</span>
          <ReactStars count={5} size={24} value={listingRatings.Communication} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Check-in</span>
          <ReactStars count={5} size={24} value={listingRatings.Checkin} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Cleanliness</span>
          <ReactStars count={5} size={24} value={listingRatings.Cleanliness} color2={'#137269'} edit={false}/>
          <span style={{'float': 'left'}}>Value</span>
          <ReactStars count={5} size={24} value={listingRatings.Value} color2={'#137269'} edit={false}/>
        </ReviewPanel>

        {reviewList.map(review => <ReviewItem key={review.review_id} user_avatar={review.user_avatar} user_name={review.user_name} review_date={review.review_date} review_content={review.review_content}/>)}
      </div>
      )
  }
};


export default Review;




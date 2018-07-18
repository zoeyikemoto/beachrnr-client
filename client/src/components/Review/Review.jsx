import React from 'react';
import ReactDOM from 'react-dom';
import ReactStars from 'react-stars';
import {reviewList, listingRatings} from '../../data/mock-data-review.js';
import ReviewItem from './Reviewitem.jsx';
import styled from 'styled-components';


const ReviewSection = styled.div`
  margin: 20%;
  width: 60%;
`;

const ReviewCount = styled.h2`
  float: left;
`;

const ReviewPanel = styled.div`
  clear: both;
  margin-bottom: 2em;
`;

const ReviewType = styled.span`
  float: left;
`;


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'reviewList': reviewList
    }
  }

  componentDidMount() {
    this.reportHandler = this.reportHandler.bind(this);
  }

  reportHandler(e) {
    console.log('flag has been clicked');
  }

  render() {
    return (
      <ReviewSection >
        <div>
          <ReviewCount>580 Reviews</ReviewCount>
          <ReactStars count={5} size={30} value ={5} color2={'#137269'} edit={false}/>
        </div>

        <ReviewPanel>
          <ReviewType>Accuracy</ReviewType>
          <ReactStars count={5} size={24} value={listingRatings.Accuracy} color2={'#137269'} edit={false}/>
          <ReviewType>Location</ReviewType>
          <ReactStars count={5} size={24} value={listingRatings.Location} color2={'#137269'} edit={false}/>
          <ReviewType>Communication</ReviewType>
          <ReactStars count={5} size={24} value={listingRatings.Communication} color2={'#137269'} edit={false}/>
          <ReviewType>Check-in</ReviewType>
          <ReactStars count={5} size={24} value={listingRatings.Checkin} color2={'#137269'} edit={false}/>
          <ReviewType>Cleanliness</ReviewType>
          <ReactStars count={5} size={24} value={listingRatings.Cleanliness} color2={'#137269'} edit={false}/>
          <ReviewType>Value</ReviewType>
          <ReactStars count={5} size={24} value={listingRatings.Value} color2={'#137269'} edit={false}/>
        </ReviewPanel>

        {reviewList.map(review => <ReviewItem key={review.review_id} user_avatar={review.user_avatar} user_name={review.user_name} review_date={review.review_date} review_content={review.review_content} reportHandler={this.reportHandler}/>)}
      </ReviewSection>
      )
  }
};


export default Review;




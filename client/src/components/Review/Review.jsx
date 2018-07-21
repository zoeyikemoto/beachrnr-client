import React from 'react';
import ReactDOM from 'react-dom';
import ReactStars from 'react-stars';
import {fullReviewList, listingRatings} from '../../data/mock-data-review.js';
import ReviewItem from './Reviewitem.jsx';
import styled from 'styled-components';
import Pagination from './Pagination.jsx';

const ReviewSection = styled.div`
  margin: 20px auto;
  width: 60%;
`;

const ReviewCount = styled.h2`
  display: inline-block;
`;

const ReviewStar = styled(ReactStars)`
  display: inline-block;
  margin-left: 10px;
`;

const ReviewPanel = styled.div`
  margin-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-width: 1px;
`;

const ReviewListItemHalf = styled.div`
  display: inline-block;
  width: 50%;
`;


const ReviewList = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  padding-bottom: 30px;
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-width: 1px;
`;

const ReviewListItem = styled.li`
  margin-top: 5px;
`;


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'reviewList': fullReviewList.slice(0, 10),
      'fullReviewList': fullReviewList,
      'revewCategories': ['Accuracy', 'Location', 'Communication', 'Checkin', 'Cleanliness', 'Value']
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(currentPageItems) {
    this.setState({
      'reviewList': currentPageItems
    })
  }

  render() {
    return (
      <ReviewSection >
        <ReviewPanel>
          <a name='reviewtop'></a>
          <ReviewCount>580 Reviews</ReviewCount>
          <ReviewStar count={5} size={30} value ={5} color2={'#137269'} edit={false}></ReviewStar>
        </ReviewPanel>

        <ReviewList>
          <ReviewListItemHalf>
          {this.state.revewCategories.slice(0, 3).map((item, i) => (
            <ReviewListItem>
            <ReviewListItemHalf>
              {item}
             </ReviewListItemHalf>
             <ReviewListItemHalf>
                <ReviewStar count={5} size={24} value={listingRatings.Accuracy} color2={'#137269'} edit={false}/>
             </ReviewListItemHalf>
            </ReviewListItem>
          ))}
          </ReviewListItemHalf>

          <ReviewListItemHalf>
            {this.state.revewCategories.slice(3).map((item,i) => (
              <ReviewListItem>
              <ReviewListItemHalf>
                {item}
               </ReviewListItemHalf>
               <ReviewListItemHalf>
                  <ReviewStar count={5} size={24} value={listingRatings.Accuracy} color2={'#137269'} edit={false}/>
               </ReviewListItemHalf>
              </ReviewListItem>
            ))}
          </ReviewListItemHalf>

        </ReviewList>

        {this.state.reviewList.map(review => <ReviewItem key={review.review_id} user_avatar={review.user_avatar} user_name={review.user_name} review_date={review.review_date} review_content={review.review_content}/>)}
        <div className='pagination'>
          <Pagination fullReviewList={this.state.fullReviewList} onChange={this.onChange}/>
        </div>
      </ReviewSection>
      )
  }
};


export default Review;




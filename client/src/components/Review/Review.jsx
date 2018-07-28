import React from 'react';
import ReactDOM from 'react-dom';
import ReactStars from 'react-stars';
import {fullReviewList, listingRatings} from '../../data/mock-data-review.js';
import ReviewItem from './Reviewitem.jsx';
import styled from 'styled-components';
import Pagination from './Pagination.jsx';
import {Grid} from 'semantic-ui-react';

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

const PagPanel = styled.div`
  margin-top: 2em;
`;

const GridColumn = styled(Grid.Column)`
  @media (max-width: 989px) {
    display: none !important;
  }
`;

const WhiteGrid = styled(Grid)`
  height: 1em !important;
`;

const RatingGrid = styled(Grid)`
  lineHeight: 1.2em;
  height: 3em;
`;

const ReviewGrid = styled(Grid)`
  margin-bottom: 20px !important;
  padding-bottom: 10px !important;
  border-bottom-style: solid !important;
  border-bottom-color: grey !important;
  border-width: 1px !important;
`;

const StarsGrid = styled(Grid.Column)`
  text-align: right !important;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'reviewList': fullReviewList.slice(0, 10),
      'fullReviewList': fullReviewList,
      'revewCategories': ['Accuracy', 'Location', 'Communication', 'Checkin', 'Cleanliness', 'Value'],
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
         <a name='reviewtop'></a>
        <ReviewPanel>
          <ReviewCount>580 Reviews</ReviewCount>
          <ReviewStar count={5} size={30} value ={5} color2={'#137269'} edit={false}></ReviewStar>
        </ReviewPanel>
        <WhiteGrid><Grid.Column></Grid.Column></WhiteGrid>
        <ReviewGrid>
          <Grid.Column mobile={16} tablet={16} computer={7} largeScreen={7} widescreen={7}>
            {this.state.revewCategories.slice(0, 3).map((item, i) => (
              <RatingGrid key={i}>
                <Grid.Column mobile={7} tablet={7} computer={7} largeScreen={7} widescreen={7}>
                  {item}
                 </Grid.Column>
                 <StarsGrid mobile={9} tablet={9} computer={9} largeScreen={9} widescreen={9}>
                    <ReviewStar count={5} size={24} value={listingRatings[item]} color2={'#137269'} edit={false}/>
                 </StarsGrid>
               </RatingGrid>
            ))}

          </Grid.Column>

          <GridColumn computer={2} largeScreen={2} widescreen={2}></GridColumn>

          <Grid.Column mobile={16} tablet={16} computer={7} largeScreen={7} widescreen={7}>
            {this.state.revewCategories.slice(3).map((item, i) => (
              <RatingGrid key={i}>
                <Grid.Column mobile={7} tablet={7} computer={7} largeScreen={7} widescreen={7}>
                  {item}
                 </Grid.Column>
                 <StarsGrid mobile={9} tablet={9} computer={9} largeScreen={9} widescreen={9}>
                    <ReviewStar count={5} size={24} value={listingRatings[item]} color2={'#137269'} edit={false}/>
                 </StarsGrid>
              </RatingGrid>
            ))}
          </Grid.Column>
        </ReviewGrid>
        {this.state.reviewList.map(review => <ReviewItem key={review.review_id} user_avatar={review.user_avatar} user_name={review.user_name} review_date={review.review_date} review_content={review.review_content}/>)}
        <PagPanel>
          <Pagination fullReviewList={this.state.fullReviewList} onChange={this.onChange}/>
        </PagPanel>
      </ReviewSection>
      )
  }
};


export default Review;

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

const ReviewListItem = styled.li`
  margin-top: 5px;
`;

const PagPanel = styled.div`
  margin-top: 2em;
`;


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'reviewList': fullReviewList.slice(0, 10),
      'fullReviewList': fullReviewList,
      'revewCategories': ['Accuracy', 'Location', 'Communication', 'Checkin', 'Cleanliness', 'Value'],
      'isMobile': false,
      'isTablet': false,
    };
    this.onChange = this.onChange.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize() {
    this.setState({
      'isMobile': window.innerWidth < 500,
      'isTablet': window.innerWidth>=500 && window.innerWidth <=989
    })
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
        <Grid style={{'height':'1em'}}><Grid.Column></Grid.Column></Grid>
        <Grid style={{'marginBottom': '20px', 'paddingBottom':'10px', 'borderBottomStyle': 'solid', 'borderBottomColor': 'grey', 'borderWidth': '1px'}}>
          <Grid.Column mobile={16} tablet={16} computer={7} largeScreen={7} widescreen={7}>
            {this.state.revewCategories.slice(0, 3).map((item, i) => (
              <Grid key={i} style={{'lineHeight' : '1.2em', 'height':'3em'}}>
                <Grid.Column mobile={8} tablet={8} computer={8} largeScreen={8} widescreen={8}>
                  {item}
                 </Grid.Column>
                 <Grid.Column mobile={8} tablet={8} computer={8} largeScreen={8} widescreen={8} style={{textAlign:'right'}}>
                    <ReviewStar count={5} size={24} value={listingRatings[item]} color2={'#137269'} edit={false}/>
                 </Grid.Column>
               </Grid>
            ))}

          </Grid.Column>
          { this.state.isMobile || this.state.isTablet
            ? ''
            : <Grid.Column computer={2} largeScreen={2} widescreen={2}>
              </Grid.Column>
          }

          <Grid.Column mobile={16} tablet={16} computer={7} largeScreen={7} widescreen={7}>
            {this.state.revewCategories.slice(3).map((item, i) => (
              <Grid key={i} style={{'lineHeight' : '1.2em', 'height':'3em'}}>
                <Grid.Column mobile={8} tablet={8} computer={8} largeScreen={8} widescreen={8}>
                  {item}
                 </Grid.Column>
                 <Grid.Column mobile={8} tablet={8} computer={8} largeScreen={8} widescreen={8} style={{'textAlign': 'right'}}>
                    <ReviewStar count={5} size={24} value={listingRatings[item]} color2={'#137269'} edit={false}/>
                 </Grid.Column>
              </Grid>
            ))}
          </Grid.Column>
        </Grid>
        {this.state.reviewList.map(review => <ReviewItem key={review.review_id} user_avatar={review.user_avatar} user_name={review.user_name} review_date={review.review_date} review_content={review.review_content}/>)}
        <PagPanel>
          <Pagination fullReviewList={this.state.fullReviewList} onChange={this.onChange}/>
        </PagPanel>
      </ReviewSection>
      )
  }
};


export default Review;


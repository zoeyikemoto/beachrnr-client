import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReportModal from './Report.jsx';
import {Grid} from 'semantic-ui-react';

const ReviewItemDiv = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-width: 1px;
`;


const ReviewItemAvatar = styled.img`
  width: 40px;
  height: 40px;
  float: left;
  border-radius: 50%;
`;

const ReviewPerson = styled.span`
  line-height: 1.5em;
`;

const ReviewContent = styled.div`
  clear: both;
  line-height: 1.5em;
  margin: 1em 0 1.5em;
`;


const ReadMoreButton = styled.span`
  color: #008080;
  &:hover {text-decoration: underline;
           cursor: pointer;};
`;


class ReviewItem extends React.Component {

  constructor(props) {
    super(props);
    this.readMore = this.readMore.bind(this);
  }

  readMore(e, replacedText) {
    e.target.textContent = replacedText;
    e.target.setAttribute('style', 'color: black; text-decoration: none; cursor: auto');
  }

  render() {
    return (
      <ReviewItemDiv>
        <Grid>
          <Grid.Column mobile={3} tablet={2} computer={2} largeScreen={1} widescreen={1} style={{width:'10%','display':'inline-block', 'verticalAlign': 'middle'}}>
            <ReviewItemAvatar src={this.props.user_avatar} />
          </Grid.Column>
          <Grid.Column mobile={11} tablet={12} computer={12} largeScreen={13} widescreen={13} style={{'display':'inline-block', 'verticalAlign': 'middle'}}>
            <ReviewPerson>{this.props.user_name}</ReviewPerson>
            <br></br>
            <ReviewPerson>{this.props.review_date}</ReviewPerson>
          </Grid.Column>
          <Grid.Column mobile={2} tablet={2} computer={2} largeScreen={2} widescreen={2} style={{'display':'inline-block', 'textAlign':'right'}}>
            <ReportModal/>
          </Grid.Column>
        </Grid>
        <ReviewContent>
          <span>{this.props.review_content.slice(0, 253)}</span>
          {this.props.review_content.length > 253
           ? <ReadMoreButton onClick={(e) => {this.readMore(e, this.props.review_content.slice(253))}}>...Read more</ReadMoreButton>
           : <span></span>
          }
        </ReviewContent>
      </ReviewItemDiv>
    )
  }
};


export default ReviewItem;

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import reviewCss from '../../styles/review.css';
import ReportModal from './Report.jsx';

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

const ReviewContent = styled.div`
  clear: both;
  height: 4.8em;
  line-height: 1.2em;
  margin-top: 1em;
`;

const ReviewPerson = styled.span`
  margin: 0.8em;
  line-height: 1.3em;
`;


const ReviewItem = (props) => (
  <ReviewItemDiv>
    <ReviewItemAvatar src={props.user_avatar} />
    <ReviewPerson>{props.user_name}</ReviewPerson>
    <ReportModal/>
    <br></br>
    <ReviewPerson>{props.review_date}</ReviewPerson>
    <ReviewContent>
      <p>
      {props.review_content}
      </p>
    </ReviewContent>

  </ReviewItemDiv>
);


export default ReviewItem;

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ReviewItemAvatar = styled.img`
  width: 5%;
  height: 5%;
  float: left;
  border-radius: 50%;
`;

const ReviewItem = (props) => (
  <div>
    <ReviewItemAvatar src={props.user_avatar} />
    <span>{props.user_name}</span>
    <br></br>
    <span>{props.review_date}</span>
    <p style = {{'clear': 'both'}}>
      {props.review_content}
    </p>
  </div>
);


export default ReviewItem;

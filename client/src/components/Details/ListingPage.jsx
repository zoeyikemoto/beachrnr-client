import React from 'react';
import ReactDOM from 'react-dom';
import style from '../../styles/listingdetails.css';
import styled from 'styled-components';
import api from '../../../utils/api.js';

const MainImage = styled.div`

`;

const MainContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Title = styled.h1`
`;

const Description = styled.div`
  width: 80%;
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-width: 1px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const ReadMore = styled.div`
`;

const ReadMoreButton = styled.button`
`;

const ListBlock = styled.ul`
`;

const ListItem = styled.li`
`;

const Rooms = styled.h4`
`;

const RoomItem = styled.span`
  margin-left: 10px;
`;

const pluralize = function(num, word){
  if(num > 0 && num <= 1) {
    return num + " " + word;
  } else {
    return num + " " + word + "s";
  }
};

const ListingPage = (props) => {
    const data = props.currentListing;
    return (
      <div>
        <MainImage style={ {
          backgroundImage: 'url('+data.unitImage+')',
          height: '500px',
          width: '100%',
          backgroundRepeat:'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%'
        } }>
        </MainImage>
        <MainContainer>
          <p>{data.room_type}</p>
          <Title>{data.unitName}</Title>
          <h3>{data.city}, {data.state}</h3>
          <Rooms>
            <RoomItem style={ {
              marginLeft: '0px'
            } }>
              {pluralize(data.guests, 'guest')}
            </RoomItem>
            <RoomItem>
              {pluralize(data.bedrooms, 'bedroom')}
            </RoomItem>
            <RoomItem>
              {pluralize(data.beds, 'bed')}
            </RoomItem>
            <RoomItem>
              {pluralize(data.baths, 'bath')}
            </RoomItem>
          </Rooms>
          <h4>{data.unitPrice} {data.priceModifier}</h4>
          <Description>
            <p>{data.description_short}</p>
            <ReadMore>
              <p>
                {data.description_long}
              </p>
            </ReadMore>
          </Description>
          <Description>
            <h3>Amenities</h3>
            <ListBlock>
              <ListItem>{data.amenities}</ListItem>
            </ListBlock>
          </Description>
          <Description>
            <ListBlock>
              <ListItem>{data.house_rules}</ListItem>
            </ListBlock>
          </Description>
          <Description>
            <p>{data.cancellation_policy}</p>
          </Description>
        </MainContainer>
      </div>
      )
};
export default ListingPage;
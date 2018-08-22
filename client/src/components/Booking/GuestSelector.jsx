import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import { SmallText } from './../Styles/Booking/HelperStyles.jsx';
import {
  DropDown,
  Carat,
  GuestTypeWrapper,
  GuestTypeName,
  GuestTypeCounter,
  AdultCounterDecrement,
  AdultCounterIncrement,
  ButtonCircle,
  VertAlignedSpan,
  GuestCount,
  GuestSelect,
  BookButton,
  BookedMark
} from './../Styles/Booking/BookingStyles.jsx';

const GuestSelector = (props) => (
  <div>
    <SmallText><strong>Guests</strong></SmallText>
    <br />
    <DropDown>
      <div onClick={props.toggleGuestMenu} style={{cursor: 'pointer'}}>
        <span>{props.guestCount}</span>
          {props.guestMenuOpen
            ? <Carat viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd"></path></Carat>
            : <Carat viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></Carat>
          }
      </div>
      {props.guestMenuOpen
        ?
          <GuestSelect>
            <Card.Content>
              <GuestTypeWrapper>
                <GuestTypeName>Adults</GuestTypeName>
                <GuestTypeCounter>
                  <AdultCounterDecrement onClick={props.decrementGuests} guestCount={props.standardGuests} >
                    <ButtonCircle>
                      <VertAlignedSpan>-</VertAlignedSpan>
                    </ButtonCircle>
                  </AdultCounterDecrement>
                  <GuestCount>
                    <VertAlignedSpan>{props.standardGuests}</VertAlignedSpan>
                  </GuestCount>
                  <AdultCounterIncrement onClick={props.incrementGuests} >
                    <ButtonCircle>
                      <VertAlignedSpan>+</VertAlignedSpan>
                    </ButtonCircle>
                  </AdultCounterIncrement>
                </GuestTypeCounter>
              </GuestTypeWrapper>
            </Card.Content>
          </GuestSelect>
        : null
      }
    </DropDown>
    <Divider hidden />
    <BookButton onClick={props.book} size='huge' fluid booked={props.booked ? 1 : 0}>
      {!props.booked
        ? 'Book'
        : <BookedMark>✓</BookedMark>
      }
    </BookButton>
  </div>
);

export default GuestSelector;
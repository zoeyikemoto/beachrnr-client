import ReactStars from 'react-stars';
import { Card, Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const VertAlignedStars = styled(ReactStars)`
  display: inline-block;
  vertical-align: middle;
`;

export const CardContainer = styled.div`
  width: 376px;
  margin: auto;
`;

export const DropDown = styled.div`
  border: 1px solid rgba(34, 36, 38, 0.1);
  color: #757575;
  font-size: 16px;
  padding: 14px 11px 14px 14px;
  position: relative;
`;

export const Carat = styled.svg`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  display: block;
  fill: currentcolor;
`;

export const GuestTypeWrapper = styled.div`
  user-select: none;

  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const InlineBlock = styled.div`
  display: inline-block
`;

const GuestTypeSection = InlineBlock.extend`
  width: 50%;
  vertical-align: middle;
`;

export const GuestTypeName = GuestTypeSection.extend`
  text-align: left;
`;

export const GuestTypeCounter = GuestTypeSection.extend`
  text-align: center;
`;

const GuestTypeCounterButton = InlineBlock.extend`
  width: 40%;
  height: 100%;
  cursor: pointer;
`;

export const AdultCounterDecrement = GuestTypeCounterButton.extend`
  opacity: ${props => props.guestCount < 2 ? '0.5' : '1'};
`;

export const AdultCounterIncrement = GuestTypeCounterButton.extend``;

export const CounterDecrement = GuestTypeCounterButton.extend`
  opacity: ${props => props.guestCount < 1 ? '0.5' : '1'};
`;

export const CounterIncrement = GuestTypeCounterButton.extend``;

export const ButtonCircle = InlineBlock.extend`
  border: 1px solid green;
  border-radius: 100%;
  color: green;
  width: 2rem;
  height: 2rem;
`;

export const VertAlignedSpan = styled.span`
  vertical-align: middle;
`;

export const GuestCount = InlineBlock.extend`
  width: 20%
`;

export const GuestSelect = styled(Card)`
  position: absolute !important;
  width: 100% !important;
  left: 0;
  border-top: 2px solid green !important;
  border-radius: 0 !important;
`;

export const BookButton = styled(Button)`
  background-color: ${props => !props.booked ? '#FF5A5F' : '#21ba45'} !important;
  color: white !important;
`;

export const BookedMark = styled.span`
  font-size: 36px;
  line-height: 12px;
  vertical-align: sub;
`;
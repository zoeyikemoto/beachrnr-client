import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../../styles/booking.css';
import { SmallText, BigText } from './../Styles/Booking/HelperStyles.jsx';
import { VertAlignedStars, CardContainer } from './../Styles/Booking/BookingStyles.jsx';
import GuestSelector from './GuestSelector.jsx';
import { bookedDates } from '../../data/mockedDataBooking.js';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      standardGuests: 1,
      infantGuests: 0,
      guestMenuOpen: false,
      booked: false,
      blockedDates: bookedDates[props.listingId]
    };

    this.toggleGuestMenu = this.toggleGuestMenu.bind(this);
    this.incrementGuests = this.incrementGuests.bind(this);
    this.decrementGuests = this.decrementGuests.bind(this);
    this.book = this.book.bind(this);
    this.isDayBlocked = this.isDayBlocked.bind(this);
  }

  toggleGuestMenu() {
    this.setState({
      guestMenuOpen: !this.state.guestMenuOpen
    });
  }

  incrementGuests() {
    this.setState({
      standardGuests: ++this.state.standardGuests
    });
  }

  decrementGuests() {
    if (this.state.standardGuests > 1) {
      this.setState({
        standardGuests: --this.state.standardGuests
      });
    }
  }
  
  book() {
    this.setState({
      booked: !this.state.booked
    });
  }

  isDayBlocked(day) {
    return this.state.blockedDates[day.format('YYYYMMDD')];
  }

  render() {

    let guestCount = this.state.standardGuests + ' guest';
    guestCount += this.state.standardGuests > 1 ? 's' : '';
    guestCount += this.state.infantGuests ? `, ${this.state.infantGuests} infant` : '';
    guestCount += this.state.infantGuests ? 's' : '';

    return (
      <CardContainer>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <BigText>$70</BigText> <SmallText>per night</SmallText>
              <div>
                <VertAlignedStars count={5} size={12} value={5} color2={'#137269'} edit={false}/> <SmallText>580</SmallText>
              </div>
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <div>
              <SmallText><strong>Dates</strong></SmallText>
              <br />
              <DateRangePicker
                startDate={this.state.startDate}
                startDateId=""
                endDate={this.state.endDate}
                endDateId=""
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                numberOfMonths={1}
                isDayBlocked={this.isDayBlocked}
              />
            </div>
            <Divider hidden />
            <GuestSelector
              guestMenuOpen={this.state.guestMenuOpen}
              standardGuests={this.state.standardGuests}
              booked={this.state.booked}
              guestCount={guestCount}
              toggleGuestMenu={this.toggleGuestMenu}
              incrementGuests={this.incrementGuests}
              decrementGuests={this.decrementGuests}
              book={this.book}
            ></GuestSelector>
          </Card.Content>
        </Card>
      </CardContainer>
    )
  }
}

export default Booking;
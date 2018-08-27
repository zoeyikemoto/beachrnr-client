import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../../styles/booking.css';
import { SmallText, BigText } from './../Styles/Booking/HelperStyles.jsx';
import { VertAlignedStars, CardContainer } from './../Styles/Booking/BookingStyles.jsx';
import GuestSelector from './GuestSelector.jsx';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      adultGuests: 1,
      childGuests: 0,
      infantGuests: 0,
      guestMenuOpen: false,
      booked: false
    };

    this.toggleGuestMenu = this.toggleGuestMenu.bind(this);
    this.incrementGuests = this.incrementGuests.bind(this);
    this.decrementGuests = this.decrementGuests.bind(this);
    this.book = this.book.bind(this);
    this.isDayBlocked = this.isDayBlocked.bind(this);
  }

  componentDidMount() {
    fetch(`http://ec2-54-215-179-47.us-west-1.compute.amazonaws.com:3000/api/bookings/${this.props.listingId}`)
      .then(res => res.json())
      .then(res => this.setState({ blockedDates: res }));
  }

  toggleGuestMenu() {
    this.setState(prevState => ({
      guestMenuOpen: !prevState.guestMenuOpen
    }));
  }

  incrementGuests(guestType) {
    this.setState(prevState => ({
      [guestType]: ++prevState[guestType]
    }));
  }

  decrementGuests(guestType) {
    if (guestType === 'adultGuests' && this.state.adultGuests > 1) {
      this.setState(prevState => ({
        adultGuests: --prevState.adultGuests
      }));
    } else if (guestType !== 'adultGuests' && this.state[guestType] > 0) {
      this.setState(prevState => ({
        [guestType]: --prevState[guestType]
      }));
    }
  }
  
  book() {
    const body = {
      dates: {
        startDate: this.state.startDate,
        endDate: this.state.endDate
      },
      guests: {
        adults: this.state.adultGuests,
        children: this.state.childGuests,
        infants: this.state.infantGuests
      }
    };

    const init = {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(body)
    };
    
    fetch(`http://ec2-54-215-179-47.us-west-1.compute.amazonaws.com:3000/api/bookings/${this.props.listingId}`, init)
      .then(res => res.json())
      .then(res => {
        this.setState({ booked: !this.state.booked })
      })
      .catch(console.error);
  }

  isDayBlocked(day) {
    return this.state.blockedDates[day.format('YYYYMMDD')];
  }

  render() {
    const standardGuests = this.state.adultGuests + this.state.childGuests;
    let guestCount = standardGuests + ' guest';
    guestCount += standardGuests > 1 ? 's' : '';
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
                onFocusChange={focusedInput => !this.state.blockedDates || this.setState({ focusedInput })}
                numberOfMonths={1}
                isDayBlocked={this.isDayBlocked}
              />
            </div>
            <Divider hidden />
            <GuestSelector
              guestMenuOpen={this.state.guestMenuOpen}
              adultGuests={this.state.adultGuests}
              childGuests={this.state.childGuests}
              infantGuests={this.state.infantGuests}
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
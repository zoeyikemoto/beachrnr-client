import React from 'react';
import { Card, Divider, Button } from 'semantic-ui-react';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../../styles/booking.css';

const VertAlignedStars = styled(ReactStars)`
  display: inline-block;
  vertical-align: middle;
`;

const SmallText = styled.span`
  font-size: 12px;
`;

const BigText = styled.span`
  font-size: 22px;
`;

const CardContainer = styled.div`
  width: 376px;
  margin: 3rem auto;
`;

const DropDown = styled.div`
  border: 1px solid rgba(34, 36, 38, 0.1);
  color: #757575;
  font-size: 16px;
  padding: 14px 11px 14px 14px;
  position: relative;
`;

const Carat = styled.svg`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  height: 16px;
  width: 16px;
  display: block;
  fill: currentcolor;
`;

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
      booked: false
    };

    this.toggleGuestMenu = this.toggleGuestMenu.bind(this);
    this.incrementGuests = this.incrementGuests.bind(this);
    this.decrementGuests = this.decrementGuests.bind(this);
    this.book = this.book.bind(this);
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
                startDateId="your_unique_start_date_id"
                endDate={this.state.endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                numberOfMonths={1}
              />
            </div>
            <Divider hidden />
            <div>
              <SmallText><strong>Guests</strong></SmallText>
              <br />
              <DropDown>
                <div onClick={this.toggleGuestMenu} style={{cursor: 'pointer'}}>
                  <span>{guestCount}</span>
                    {this.state.guestMenuOpen
                      ? <Carat viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z" fillRule="evenodd"></path></Carat>
                      : <Carat viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path></Carat>
                    }
                </div>
                {this.state.guestMenuOpen
                  ?
                    <Card style={{position: 'absolute', width: '100%', left: 0, borderRadius: 0, borderTop: '2px solid green'}}>
                      <Card.Content>
                        <div style={{display: 'inline-block', width: '50%', textAlign: 'left'}}>Adults</div>
                        <div style={{display: 'inline-block', width: '50%', textAlign: 'center'}}>
                          <div onClick={this.decrementGuests} style={{display: 'inline-block', width: '40%', height: '100%', cursor: 'pointer', opacity: this.state.standardGuests < 2 ? '0.5' : '1'}}>
                            <div style={{display: 'inline-block', border: '1px solid green', borderRadius: '100%', color: 'green', width: '2rem', height: '2rem'}}>
                              <span style={{verticalAlign: 'middle'}}>-</span>
                            </div>
                          </div>
                          <div style={{display: 'inline-block', width: '20%'}}>
                            <span style={{verticalAlign: 'middle'}}>{this.state.standardGuests}</span>
                          </div>
                          <div onClick={this.incrementGuests} style={{display: 'inline-block', width: '40%', height: '100%', cursor: 'pointer'}}>
                            <div style={{display: 'inline-block', border: '1px solid green', borderRadius: '100%', color: 'green', width: '2rem', height: '2rem'}}>
                              <span style={{verticalAlign: 'middle'}}>+</span>
                            </div>
                          </div>
                        </div>
                      </Card.Content>
                    </Card>
                  : null
                }
              </DropDown>
              <Divider hidden />
              <Button onClick={this.book} style={{backgroundColor: !this.state.booked ? '#FF5A5F' : '#21ba45', color: 'white'}} size='huge' fluid>
                {!this.state.booked
                  ? 'Book'
                  : <span style={{fontSize: '36px', lineHeight: '12px', verticalAlign: 'sub'}}>✓</span>
                }
              </Button>
            </div>
          </Card.Content>
        </Card>
      </CardContainer>
    )
  }
}

export default Booking;
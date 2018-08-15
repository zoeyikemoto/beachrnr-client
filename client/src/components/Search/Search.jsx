import React from 'react';
// import { listings } from '../../data/mockedDataSearch';
import Suggestions from './Suggestions.jsx'
import HitsCount from './HitsCount.jsx'
import api from '../../../utils/api';
import { Form, Header } from 'semantic-ui-react'
import styled from 'styled-components';

const Div = styled.div`
  width: 50%;
  margin: 3% auto;
  padding-top: 25px;
  color: #696969 !important;
`;

const MessageDiv = styled(Div)`
  font-size: 20px;
`
const HeaderDiv = styled(Header)`
  font-size: 25px !important;
  margin-left: 20px !important;
  color: #696969 !important;
  font-weight: bold;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      hitsCount: 0,
      timeTaken: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    let currentLocation = 'San Francisco';
    api.fetchListings(currentLocation)
    .then(results => {
      this.setState({
        results: results.data,
        query: currentLocation,
        hitsCount: results.count,
        timeTaken: results.timeTaken
      })
    }, err => console.log(err));
  }
 
  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      this.state.query && this.state.query.length > 1 ? this.getInfo(this.search.value) : '';
    })
  }

  handleKeyPress(e, cb) {
    if(e.charCode === 13 && e.target.value.length) {
      e.preventDefault();
      cb();
    }
  }

  getInfo(location) {
    api.fetchListings(location)
    .then(results => {
      this.setState({
        results: results.data,
        hitsCount: results.count,
        timeTaken: results.timeTaken
      })
    })
  }

  render() {
    return (
      <Form>
        <Div>
          <Form.Field>
            <input style={ {backgroundImage: 'url(searchIcon.png)', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', paddingLeft: '40px', height: '48px'} }
              placeholder='Destination...'
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              onKeyPress={(e)=>{this.handleKeyPress(e, this.handleInputChange)}}
            />
          </Form.Field>
        </Div>
        <HitsCount hitsCount={this.state.hitsCount} timeTaken={this.state.timeTaken} />
        {this.state.query === 'San Francisco' ? <HeaderDiv>Places to stay near you</HeaderDiv> : ''}
        {!this.state.query.length ? '' 
        : (this.state.results.length > 0 
          ? 
            <Suggestions results={this.state.results} /> 
          : 
            <MessageDiv> 
              No results found for {this.state.query}
            </MessageDiv>
          )
        }
      </Form>
    )
  }
}

export default Search;
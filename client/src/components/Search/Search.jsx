import React from 'react';
import { listings } from '../../data/mockedDataSearch';
import Suggestions from './Suggestions.jsx'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components';

const Div = styled.div`
  width: 40%;
  margin: 3% 5%;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
 
  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.state.query.length % 2 === 0 ? this.getInfo(this.search.value) : '';
      } 
    })
  }

  handleKeyPress(e, cb) {
    if(e.charCode === 13 && e.target.value.length) {
      e.preventDefault();
      cb();
    }
  }

  getInfo(location) {
    let results = listings.filter(listing => 
      listing.unitAddress.toLowerCase().includes(location.toLowerCase())
    )
    this.setState({
      results: results
    })
  }
 
  render() {
    return (
      <Form>
        <Div>
          <Form.Field>
            <input style={ {backgroundImage: 'url(searchIcon.png)', backgroundRepeat: 'no-repeat', paddingLeft: '40px'} }
              placeholder="Destination..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
              onKeyPress={(e)=>{this.handleKeyPress(e, this.handleInputChange)}}
            />
          </Form.Field>
        </Div>
        <Suggestions results={this.state.results} />
      </Form>
    )
  }
}
 
export default Search;

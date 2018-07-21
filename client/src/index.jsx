import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review/Review.jsx';
import Search from './components/Search/Search.jsx';
import Details from './components/Details/listingdetails.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search />
        <Details />
        <Review />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
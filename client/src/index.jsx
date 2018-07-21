import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review/Review.jsx';
import Search from './components/Search/Search.jsx';
import ListingPage from './components/Details/ListingPage.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search />
        <ListingPage />
        <Review />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review.jsx';
import Search from './components/Search/Search.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search />
        <Review />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p> TESTING </p>
        <Review />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
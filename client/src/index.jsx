import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx';
import MainLayout from './components/MainLayout.jsx';

const Router = BrowserRouter;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/rooms' component={MainLayout} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
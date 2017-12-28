import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Doit from './doit/DoIt'

class RouteApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/doit">Do It </Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={App} />
          <Route exact path="/doit" component={Doit} />
        </div>
      </Router>
    );
  }
}

export default RouteApp;

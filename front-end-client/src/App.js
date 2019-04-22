import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Leaderboard from './Leaderboard/Leaderboard.js';
import Navbar from './Navbar.js';

import './css/App.scss';

class App extends Component {

  render() {
      return (
        <Router>
          <div>
            <img src="logo.png" className="logo" />
            <Navbar />
            <Route path="/:type(solo|duo|squad)" component={Leaderboard} />
          </div>
        </Router>
      );
    }
  }
export default App;

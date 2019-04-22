import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="col-xs-3">
          <Link to="/solo">SOLO</Link>
        </div>
        <div className="col-xs-1">
          |
        </div>
        <div className="col-xs-4">
        <Link to="/duo">DUO</Link>
        </div>
        <div className="col-xs-1">
          |
        </div>
        <div className="col-xs-3">
        <Link to="/squad">SQUADS</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
import React, { Component } from 'react';

class ColumnHeader extends Component {

  render() {
    return (
      <div className="row colheader">
        <div className="col-xs-4">
          <h4>#</h4>
        </div>
        <div className="col-xs-4">
          <h4>Name</h4>
        </div>
        <div className="col-xs-4 recent">
          <h4>Points</h4>
        </div>
      </div>
    );
  }
}

export default ColumnHeader;

import React, { Component } from 'react';

class UserData extends Component {

  render() {
    return (
      <div className="row users">
        <div className="col-xs-4 rank">
          <h4>{ this.props.rank }</h4>
        </div>
        <div className="col-xs-4">
          <h4>{ this.props.name }</h4>
        </div>
      <div className="col-xs-4">
          <h4>{ this.props.points }</h4>
        </div>
      </div>
    );
  }
}

export default UserData;

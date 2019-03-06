import React, { Component } from 'react';
import LeaderboardHeader from './LeaderboardHeader.js';
import ColumnHeader from './ColumnHeader.js';
import User from './User.js';

import './css/App.scss';

class App extends Component {
  state = {
    response: {ranking: []},
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/LeaderBoard');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

render() {
    return (
      <div className="container">
        <LeaderboardHeader />
        <ColumnHeader />
        {this.state.response.ranking.map((rank, index) =>
          <User rank={index+1} name={rank.discordid} points={rank.points} />
        )}
      </div>
    );
  }
}
export default App;

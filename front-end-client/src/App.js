import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      <div className="App">
        <header className="App-header">
          <p> SA Open League </p>
        </header>

        <div className="Center">
          <table>
            <tr>
              <th> # </th>
              <th> Name </th>
              <th> Points </th>
            </tr>
            {this.state.response.ranking.map((rank, index) =>
              <tr>
                <td>{index+1}</td>
                <td>{rank.discordid}</td>
                <td>{rank.points}</td>
              </tr>
            )}
          </table>
        </div>
      </div>
    );
  }
}
export default App;

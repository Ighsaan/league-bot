import React, { Component } from 'react';
import LeaderboardHeader from './LeaderboardHeader.js';
import ColumnHeader from './ColumnHeader.js';
import User from './UserData.js';

class Leaderboard extends Component {
    state = {
        response: {ranking: []}
    };

    componentDidMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(props) {
        this.load(props);
    }

    load = (props) => {
        var type = props.match.params.type;
        this.callApi(type)
        .then(res => {
            console.log(res);
            this.setState({ response: res });
        })
        .catch(err => console.log(err));
    }

    callApi = async (type) => {
        const response = await fetch(`/api/LeaderBoard/${type}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
        <div className="leaderboard">
            <LeaderboardHeader />
            <ColumnHeader />
            {this.state.response.ranking.map((rank, index) =>
            <User key={index+1} rank={index+1} name={rank.discordid} points={rank.points} />
            )}
        </div>
        );
    }
    }
export default Leaderboard;

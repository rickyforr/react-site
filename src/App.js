import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import Header from "./Header";
import Videos from "./Videos";

class App extends Component {
    state = {users: []};

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
  render() {
    return (
        <div>
           <Header/>
                <div className="App">
                    <h1>Users</h1>
                    {this.state.users.map(user =>
                        <div key={user.id}>{user.username}</div>
                    )}
                </div>
            <Videos></Videos>
        </div>
    );
  }
}

export default App;

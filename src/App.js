import React, { Component } from 'react';
import Header from "./Header";
import Videos from "./Videos";
import Register from "./Register"
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        console.log('HELLO!!!');
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    handleRegistration = (login) => {
        console.log(login);
        this.setState({loggedIn: login})
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' render={() =>
                        (this.state.loggedIn ? ( <Videos/>) : (<Register
                            handleRegistration={(login) => this.handleRegistration(login)}
                        />))}/>
                    <Route path='/register' render={() =>
                        (this.state.loggedIn ? ( <Redirect to="/"/>) : (
                            <Register
                                handleRegistration={(login) => this.handleRegistration(login)}
                            />))}/>
                </Switch>
            </Router>
        );
    }
}

export default App;

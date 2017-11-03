import React, { Component } from 'react';
import './App.scss';
import { Grid, Navbar } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div className="App">
                <Navbar className="bg-inverse" inverse fixedTop >
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">React App</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Grid>
                </Navbar>
            </div>
        );
    }
}

export default Header;
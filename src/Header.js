import React, { Component } from 'react';
import './App.css';
import { Grid, Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <Navbar className="bg-inverse" inverse fixedTop >
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a className="brand-logo" href="/">Wise Women</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Grid>
                </Navbar>
            </div>
        );
    }
}

export default Header;
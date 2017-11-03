import React, { Component } from 'react';
import './App.scss';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import Header from "./Header";

class App extends Component {
  render() {
    return (
        <div>
           <Header/>
            <Jumbotron>
                <Grid>
                    <h1>Welcome to React</h1>
                    <p>
                        <Button
                            bsStyle="success"
                            bsSize="large"
                            href="http://react-bootstrap.github.io/components.html"
                            target="_blank">
                            View React Bootstrap Docs
                        </Button>
                    </p>
                </Grid>
            </Jumbotron>
            <Videos></Videos>
        </div>
    );
  }
}

export default App;

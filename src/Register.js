import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Checkbox, Button, Col, ControlLabel } from 'react-bootstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoggedIn: false
        }
    }

    handleInput = (e) => {
        console.log(e.target.value);
        this.setState({username: e.target.value})
    };

    handleRegistration = (e) => {
        e.preventDefault();
        // console.log(this.state.username);
        // fetch('/users', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username
        //     })
        // })
        this.setState({isLoggedIn: true});
        console.log('FROM REGISTER, ', true);
        if (this.state.username === 'rich' ) {
            this.props.handleRegistration(true);
        }
    };


    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalUsername">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl type="username" placeholder="username" onInput={this.handleInput}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit" onClick={this.handleRegistration}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default Register;
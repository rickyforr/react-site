import React, { Component } from 'react';
import './App.scss';
import { Col } from 'react-bootstrap';


class Videos extends Component {
    render() {
        return (
            <div className="App">
                <Col xs={6} md={4} >
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe src="https://player.vimeo.com/video/240104800" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </Col>
                <Col xs={6} md={4} />
                <Col xs={6} md={4} />
            </div>
        );
    }
}

export default Videos;
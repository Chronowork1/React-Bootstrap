//Import React from react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Importing Bootstrap elements from react-bootstrap
import { Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
//Import Home css
import "./Home.css";

export default class Home extends Component {
    render(){
        return (
            //Grid is a container for normal css
            <Container>
                {/* */}
                <Jumbotron>
                    <h2>Welcome to CodeLife.io</h2>
                    <p>This is how to build a website with react-router,
                        and react bootstrap.
                    </p>
                </Jumbotron>
                {/*Link is like an anchor tag and to is an attribute */}
                <Link to="/about">
                    {/* Button tag with an attribute of bsStyle, passes as props*/}
                    <Button bsStyle="primary">About</Button>
                </Link>
            </Container>
        )
    }
}
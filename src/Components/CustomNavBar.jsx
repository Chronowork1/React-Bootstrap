import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends React.Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.header>
                    <Navbar.Brand>
                        <Link to = "/"></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.header>
                <Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
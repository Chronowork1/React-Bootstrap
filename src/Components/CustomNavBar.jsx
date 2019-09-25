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
                    {/* */}
                    <Nav pullRight>
                        {/*Unique key for each nav item, href and to is to link*/}
                        <NavItem eventKey = {1} componentClass = {Link} href="/" to= "/">
                            Home
                        </NavItem>
                        <NavItem eventKey = {2} componentClass = {Link} to= "/about">
                            About
                        </NavItem>
                        <NavItem eventKey = {3} componentClass = {Link} to= "/news">
                            News
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
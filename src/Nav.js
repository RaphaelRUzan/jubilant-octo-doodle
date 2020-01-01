import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './index.png';
import {Nav, Navbar, NavItem} from "react-bootstrap";
class myNav extends React.Component {

    render() {

        return(
            <div id="nav">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/"><img id="Logo" src={logo} alt="Logo"/></Link>
                            </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="/signup">Signup</NavItem>
                        <NavItem href="/login">Login</NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
    );}

}

export default myNav;
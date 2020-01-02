import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './index.png';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function myNav() {

    // const [isAuthenticated,userHasAuthenticated] = useState(false);

    // function handleLogout() {
    //     userHasAuthenticated(false);
    // }
      

    // return(
    //     <div id="nav">
    //         <Navbar fluid collapseOnSelect>
    //             <Navbar.Header>
    //                     <Navbar.Brand>
    //                         <NavItem to="/"><img id="Logo" src={logo} alt="Logo"/></NavItem>
    //                     </Navbar.Brand>
    //                 <Navbar.Toggle />
    //             </Navbar.Header>
    //             <Navbar.Collapse>
    //             <Nav pullRight>
    //             {isAuthenticated
    //                 ? <NavItem onClick={handleLogout}>Logout</NavItem>
    //                 : <>
    //                     <LinkContainer to="/signup">
    //                         <NavItem>Signup</NavItem>
    //                     </LinkContainer>
    //                     <LinkContainer to="/login">
    //                         <NavItem>Login</NavItem>
    //                     </LinkContainer>
    //                     </>
    //                 }

    //             </Nav>
    //             </Navbar.Collapse>
    //         </Navbar>

    //     </div>
    // );
}

export default myNav;
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './index.png';
class Nav extends React.Component {

    render() {

        return(
            <div id="nav">
                <Link to="/"><img id="Logo" src={logo} alt="Logo"/></Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/login">Login</Link>
            </div>
    );}

}

export default Nav;
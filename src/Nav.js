import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
class Nav extends React.Component {

    render() {

        return(
            <div id="nav">
                <Link to="/signup">SignUp</Link>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </div>
    );}

}

export default Nav;
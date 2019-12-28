import React from 'react';
import './Login.css';
import Textinput from './Textinput';

function Login(props){
    return <div id="LoginFormContainer">
            <form id="LoginForm">
                <Textinput label="Email Address"/>
                <Textinput label="Password"/>
                <button className="UpLogButton"> Login </button>
            </form>
        </div>;
}

export default Login;
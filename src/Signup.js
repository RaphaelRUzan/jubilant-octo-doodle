import React from 'react';
import Textinput from './Textinput';
import './Signup.css';
function SignUp(props){
    return <div id="SignUpContainer">
            <form id="LoginForm">
                <Textinput label="Email Address"/>
                <Textinput label="Password"/>
                <Textinput label="Retype Password"/>
                <button className="UpLogButton"> SignUp </button>
            </form>
        </div>;
}


export default SignUp;
import React from 'react';
import Textinput from '../Textinput';
import Feed from '../Feed';
import "./Home.css";

class Homepage extends React.Component {
    render() {
     return (
        <div>
            <h1><code>Search for a task record.</code></h1>
            <Textinput/>
            <Feed/>
        </div>
     );   
    }
}

export default Homepage;
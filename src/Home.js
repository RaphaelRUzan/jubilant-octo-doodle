import React from 'react';
import Textinput from './Textinput';
import Feed from './Feed';

class Homepage extends React.Component {
    render() {
     return (
        <div>
            <h1>Hello World</h1>
            <code>Tune in, Gorp Out</code>
            <Textinput/>
            <Feed/>
        </div>
     );   
    }
}

export default Homepage;
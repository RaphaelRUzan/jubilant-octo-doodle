import React from 'react';
import Textinput from './Textinput';
class Homepage extends React.Component {
    render() {
     return (
        <div>
            <h1>Hello World</h1>
            <code>Tune in, Gorp Out</code>
            <Textinput/>
        </div>
     );   
    }
}

export default Homepage;
import React from 'react';
import './googleMaterial.css';

class Textinput extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { label: props.label };
    }

    render () {
        return (
            <div className="group">
                <input type="text"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{this.state.label}</label>
            </div>
        );}
}

export default Textinput;
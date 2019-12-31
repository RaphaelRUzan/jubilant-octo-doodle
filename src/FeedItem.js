import React, { Component } from 'react';
import './FeedItem.css';


class FeedItem extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { content: props.content };
    }

    render () {
        return (
            <div className="FeedItem">

            </div>
        );
    }
}

export default FeedItem;
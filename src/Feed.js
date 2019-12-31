import React, { Component } from 'react';
import './Feed.css';
import FeedItem from './FeedItem.js';

class Feed extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { posts: props.posts };
    }

    render () {
        return (
            <div className="Feed">
                Gorp Feed
                <FeedItem/>
            </div>
        );}
}

export default Feed;
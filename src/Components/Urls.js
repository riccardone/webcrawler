import React, { Component } from 'react';

class Urls extends Component {
    render() {
        const urls = this.props.urls.map((url) =>
            <li className="list-group-item">{url}</li>
        );

        return (
            <ul className="list-group">{urls}</ul>
        )
    }
}

export default Urls;

import React, { Component } from 'react';

export class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { author, content } = this.props;
        return (
            <div>
                {author ? author : 'Author'}: {content ? content : 'Message'}
            </div>
        );
    }
}
import React, { Component } from 'react';

export class Message extends Component {

    render() {

        const {author, text} = this.props.dataMessage;

        return (
            <div>{author} : {text}</div>
        )
    }
};
import React, { Component } from 'react';
import { Message } from 'components/Message';

export class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { messages } = this.props;
        return (
            <div>
                { messages.map((message, index) => <Message {...message} key = { index }/>) }
            </div>
        );  
    }
}
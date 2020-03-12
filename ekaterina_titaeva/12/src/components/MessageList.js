import React, { Component } from 'react';
import { Message } from './Message'

export class MessageList extends Component {
    render() {
        const { messages } = this.props;

        return messages.map(elem => <Message text={elem} />);
    }
};
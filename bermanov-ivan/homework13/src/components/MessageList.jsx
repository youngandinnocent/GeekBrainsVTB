import React, { Component } from 'react';

import { Message } from 'components/Message';

export class MessageList extends Component {

    render() {
        const { messages } = this.props;

        return(
            <ul>
                { messages.map((message, index) => <Message key = { index } { ...message } />) }
            </ul>
        );
    }
}

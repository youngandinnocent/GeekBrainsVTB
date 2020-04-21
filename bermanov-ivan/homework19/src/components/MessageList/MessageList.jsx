import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Message, messageType } from 'components/Message';
import './MessageList.css';

export const messagesType = PropTypes.arrayOf(PropTypes.shape(messageType));

export class MessageList extends Component {

    static propTypes = {
        messages: messagesType
    };

    static defaultProps = {
        messages: [
            {
                author: '',
                content: ''
            }
        ]
    };

    render() {
        const { messages } = this.props;

        return (
            <div className="message-list">
                { messages && messages.map((message, index) => <Message {...message} key = { index } />) }
            </div>
        );  
    }
}

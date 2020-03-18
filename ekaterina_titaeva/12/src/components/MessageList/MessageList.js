import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message, messageType } from '../Message'

import './MessageList.scss';

export class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        )
    };

    render() {
        const { messages } = this.props;

        return (
            <div className='message-list'>
                {messages.map((item, index) => <Message key={index} dataMessage={item} />)}
            </div>
        )
    }
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Message, messageType } from 'components/Message';
import './MessageList.css';

export class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape(messageType))
    };

    render() {
        const { messages } = this.props;
        return (
            <div className="message-list">
                { messages.map((message, index) => <Message {...message} key = { index }/>) }
            </div>
        );  
    }
}
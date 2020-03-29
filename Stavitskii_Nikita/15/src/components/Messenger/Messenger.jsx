import React, {Component} from 'react';
import './Messenger.css';

import {MessageForm} from '../MessageForm';
import {MessageField} from '../MessageField';

export class Messenger extends Component {
    render() {
        const {messages, sendMessage} = this.props;
        return (
            <div className="messenger">
                {messages ? <MessageField items={messages} /> : <div className="no-chat-container">
                    <div className="no-chat">Please select a chat to start messaging</div>
                </div>}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        );
    }
}
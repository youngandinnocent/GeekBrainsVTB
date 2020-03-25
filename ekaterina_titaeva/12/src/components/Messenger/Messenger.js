import React, { Component } from 'react';
import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';

import './Messenger.scss';

export class Messenger extends Component {

    render() {

        const { messages, sendMessage } = this.props;
        return (
            <div className="messenger">
                {messages ?
                    <>
                        <MessageList messages={messages} />
                        <MessageForm onSend={sendMessage} />
                    </> :
                    'Выберите чат'}
            </div>
        )
    }
}
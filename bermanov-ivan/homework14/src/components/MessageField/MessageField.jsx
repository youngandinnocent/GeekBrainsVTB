import React, { Component } from 'react';

import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';
import './MessageField.css';

export class MessageField extends Component {
    state = {
        messages: []
    };

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        const { author } = lastMessage;
        if (author !== 'NDR-114') {
            setTimeout(() => {
                if (this.state.messages[this.state.messages.length - 1].author !== 'NDR-114') {
                    this.setState({
                        messages: [
                            ...this.state.messages,
                            {
                                author: 'NDR-114',
                                content: `Hello, ${author}, my name is Andrew`
                            }
                        ]
                    });
                }
            }, 1000);
        }
    }

    handleForm = (data) => {
        const message = {};
        if (data.author) {
            message.author = data.author;
        }
        if (data.content) {
            message.content = data.content;
        }
        this.setState((prevState) => ({ messages: [...prevState.messages, message] }));
    };

    render() {
        const { messages } = this.state;

        return (
            <div className="message-field">
                <MessageList messages = { messages } />
                <MessageForm onSend = { this.handleForm } />
            </div>
        );
    }
}

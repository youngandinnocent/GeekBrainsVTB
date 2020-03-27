import React, { Component } from 'react';

import { MessageList } from 'components/MessageList';
import { MessageForm } from 'components/MessageForm';

export class Messanger extends Component {
    state = {
        messages: [

        ]
    };

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        const { author } = lastMessage;
        if (author !== 'NDR-114') {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            author: 'NDR-114',
                            content: `Hello, ${author}, my name is Andrew`
                        }
                    ]
                });
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
            <div>
                <h1>Messenger prototype</h1>
                <div>
                    <MessageForm onSend = { this.handleForm } />
                    <MessageList messages = { messages } />
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';

export class Messanger extends Component {
    constructor(props) {
        super(props);
    }

    state = { messages: [] };

    componentDidUpdate() {
        const { author } = this.state.messages[this.state.messages.length - 1];
        if (author !== 'NDR-114') {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        {
                            content: `Hello, ${author ? author : 'Author'}, my name is Andrew`,
                            author: 'NDR-114'
                        }
                    ]
                });
            }, 1000);
        }
    }

    handleMessageSend = (message) => {
        this.setState((prevState) => ({ messages: [ ...prevState.messages, message ] }));
    };

    render() {
        const { messages } = this.state;
        return(
            <div>
                <h1>Messanger</h1>
                <MessageList messages = { messages } />
                <MessageForm onSend = { this.handleMessageSend }/>
            </div>
        );
    }
}

// Props 1.0 Messanger
// MessageList messages = { messages } - списку сообщений из стейта пробрасывается (пропс messages) массив сообщений
// MessageForm onSend = { this.handleMessageSend } - пробрасывается функция onSend

import React, { Component } from 'react';
import './MessagePage';
import { MessageList } from '../MessageList/MessageList';
import { MessageField } from '../MessageField/MessageField';



export class MessagePage extends Component {

    state = {
        messages: [],
        text: '',
        author: ''
    }

    componentDidUpdate() {
        if(this.state.messages[this.state.messages.length - 1].author !== 'Robot' && this.state.author === '' && this.state.text === '') {
            setTimeout(() => {
                this.robotMessages();
            }, 1000);
        } 
    } 

    handleMessageSend = (message) => {
        this.setState((state) => {
            return {messages: [...state.messages, message], author: '', text: ''}
        });
    }

    robotMessages = () => {
        this.setState((state) => {
            return {messages: [...state.messages, {author: 'Robot', text: 'Hello'}],
            }
        });
    }

    render() {

        const { messages, text, author } = this.state;

        return (
            <div>
                <MessageList items={messages} />
                <MessageField onSend={this.handleMessageSend} text={text} author={author}/>
            </div>
        )
    }
}

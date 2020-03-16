import React, {Component} from 'react';

import MessageList from "../MessageList";
import MessengerForm from "../MessengerForm";

import {answerRobot} from "../../helpers/robot";

import './Messenger.css';

class Messenger extends Component {

    componentDidUpdate() {
        if (!this.state.messages.length) {
            return;
        }

        if (this.state.messages[this.state.messages.length - 1].author !=='Robot' &&
            this.state.author === '' &&
            this.state.message === '') {
            this.answerRobot();
        }
    }

    state = {
        messages: [],
        message: '',
        author: '',
        isClick: true
    };

    handleChange = () => (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    };

    handleSendMessage = (message, author) => () => {
        if (message === '' || author === '') {
            return
        }

        if (!this.state.isClick) {
            return;
        }

        this.setState((state) => {
            return {
                messages: [...state.messages, { author, message }],
                author: '',
                message: '',
                isClick: false
            }
        });
    };

    answerRobot = () => {
        setTimeout(() => {
            this.setState((state) => {
                return {
                    messages: [...state.messages, {author: 'Robot', message: answerRobot()}],
                    isClick: true
                }
            });
        },1000);
    };

    render() {
        const {messages, message, author} = this.state;

        return(
            <div className="app__messenger messenger">
                <MessageList messages={messages}/>
                <MessengerForm
                    handleSendMessage={this.handleSendMessage}
                    handleChange={this.handleChange}
                    message={message}
                    author={author}  />
            </div>
        );
    }
}

export default Messenger;
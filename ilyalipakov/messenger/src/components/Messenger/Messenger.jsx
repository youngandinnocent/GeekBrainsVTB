import React, {Component} from 'react';

import Button from "../Button";
import MessageList from "../MessageList";

import {answerRobot} from "../../helpers/robot";

import './Messenger.css';
import {TextField} from "@material-ui/core";

class Messanger extends Component {

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !=='Robot' &&
            this.state.author === '' &&
            this.state.message === '') {
            this.answerRobot();
        }
    }

    state = {
        messages: [
            {
                author: 'Ilya',
                message: 'Hello'
            }
        ],
        message: '',
        author: ''
    };

    handleChange = () => (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    };

    handleSendMessage = (message, author) => () => () => {
        this.setState((state) => {
            return {
                messages: [...state.messages, {author, message}],
                author: '',
                message: ''
            }
        });
    };

    handleKeyDownEnter = () => (e) => {
        if (e.key === 'Enter') {
            console.log(111);
        }
    }

    answerRobot = () => {
        setTimeout(() => {
            this.setState((state) => {
                return {
                    messages: [...state.messages, {author: 'Robot', message: answerRobot()}],
                }
            });
        },1000);
    };

    render() {
        const {messages, message, author} = this.state;

        return(
            <div className="messenger">
                <div>

                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.handleChange()} value={author} name="author" type="text" placeholder="Автор" />
                <TextField multiline autoFocus onKeyDown={this.handleKeyDownEnter()} onChange={this.handleChange()} value={message} name="message" type="text" placeholder="Написать сообщение"  />
                <Button handleSendMessage={this.handleSendMessage(message, author)}  />
                </div>
                <hr/>
                <MessageList messages={messages}/>
            </div>
        );
    }
}

export default Messanger;
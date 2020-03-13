import React, { Component } from 'react';

import './MessageField.css';

import Message from '../Message/Message';
import RobotMessage from '../RobotMessage/RobotMessage';


export default class MessageField extends Component {
    state = {
        messages: []
    }

   componentDidUpdate() {
         if(this.state.messages[this.state.messages.length - 1].author !== 'Robot') {
            setTimeout(() => {
                this.robotMessages();
            }, 1000);
        } 
    } 


    
    handleMessageSend = (message) => {
        this.setState((state) => {
            return {messages: [...state.messages, message]}
        });
    } 

    robotMessages = () => {
        this.setState((state) => {
            return {messages: [...state.messages, {author: 'Robot', text: 'Hello'}]}
        });
    }

    handleRobotMessageSend = (message) => {
        console.log('HandleRobotMessage');
    }

    render() {
        return (
            <div>
                <Message onSend={this.handleMessageSend} />
                <RobotMessage robotMessages={this.robotMessages}/>
                <div className='message'>
                    <ul>
                    {this.state.messages.map((message) => {
                        return (
                            <li>
                                <div>
                                    {message.author}
                                </div>
                                <div>
                                    {message.text}
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}
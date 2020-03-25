import React, {Component} from "react";

import './app.css';

import MessageList from '../MessageList';


export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    onButtonClick = () => {
        const input = document.getElementById('messageInput'); //bad things r happening here:D
        let value = input.value;
        if(value.length) {
            input.value = '';
        }
        this.setState((state) => {
           return {messages: [...state.messages, value]} 
        })
    }


    render() {
        return (
            <div className='button-wrapper'>
                <div>
                    <input type='text' id='messageInput' />
                    <button id='btn' onClick={this.onButtonClick}>Добавить сообщение</button>
                </div>
                <div className='messages'>
                    <MessageList messages={this.state.messages}/>
                </div>
            </div>
        );
    }
}

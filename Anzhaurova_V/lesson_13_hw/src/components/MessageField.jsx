import React, {Component} from 'react';
import {Message} from './Message'; //в компонент MessageField входит компонент Message

export class MessageField extends Component {
    state = {
        //сюда будут добавляться сообщения
        messages: [],
    };

    //проверка на автора, если бот-не отвечает на сообщ.если автор, то см строку 6
    componentDidUpdate() {
        const {messages} = this.state;
        if (!(messages[messages.length - 1].author === "robot")) {
            setTimeout(() => {
                this.setState({messages: [...messages, {author: "robot", text: "Hi, I am a robot."}]})
            }, 500)
        }
    }

    handleMessageSend = (message) => {
        this.setState({messages: [...this.state.messages, message]});
    };

    render() {
        const messageElem = this.state.messages.map((item, index) => (
            <div key={index}>{item.author}: {item.text}</div>
        ));

        return (
            <div>
                <ul>
                    {messageElem}
                </ul>
                <Message onSend={this.handleMessageSend} />
            </div>
        )
    }
}
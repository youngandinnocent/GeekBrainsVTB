import React, {Component} from 'react';
import {MessageForm} from '../MessageForm';
import {MessageList} from '../MessageList';
import './Messenger.css';

//корневой компонент (аналог App.js)
export class Messenger extends Component {
    //здесь будет состояние с нашими сообщениями
    state = {
        //в этот массив добавляются сообщения из формы
        messages: []
    }

    componentDidUpdate()
    {
        //проверка на автора (если бот ,то не отвечаем на ссобщение.если автор то добавить в messages
        //здесь мы делаем setState
        //добавить сообщение от бота
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: `Приветствую Вас, ${author}! Это автоответ от бота`, author:'Bot'}])
                })
            }, 1000);
        }
    }

    handleMessageSend = (message) => {
        this.setState(({messages}) => ({messages: messages.concat([message])}));
    }


    //здесь будем подключать нашу форму
    render() {
        const {messages} = this.state;
        return (
            //MessageForm будем передавать onSend(метод который будем вызываться, когда отправлена форма
            <div className="messenger">
                <MessageList items={messages}/>
                <MessageForm onSend={this.handleMessageSend}/>
            </div>
        )
    }
}
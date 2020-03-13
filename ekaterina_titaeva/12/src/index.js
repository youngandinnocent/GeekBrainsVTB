import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MessageList } from './components/MessageList'

class Chat extends Component {

    state = {
        author: '',
        text: '',
        messageData: []
    };

    handeleChange = (event) => {
        let id = event.target.id;

        this.setState({
            [id] : event.target.value
        });
    };

    handleClick = () => {
        this.setState((state) => {
            return {
                author: '',
                text: '',
                messageData: [...state.messageData, {author: state.author, text: state.text}]
            }
        });
    };

    handleAddBot = (author, text) =>{
        this.setState((state) => {
            return {
                messageData: [...state.messageData, {author, text}]
            }
        });
    }

    render() {

        const { author, text } = this.state;

        return (
            <div>
                <input id='author' value={author} onChange={this.handeleChange} placeholder='Введите имя'></input>
                <input id={'text'} value={text} onChange={this.handeleChange} placeholder='Введите сообщение'></input>
                <button onClick={this.handleClick}>Добавить</button>
                <MessageList messages={this.state.messageData} handleAddBot={this.handleAddBot} />
            </div>
        )
    }
};

ReactDom.render(
    <Chat />,
    document.getElementById('root')
);
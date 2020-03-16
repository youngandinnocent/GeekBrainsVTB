import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MessageList } from '../MessageList'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

// import './Chat.css';

export class Chat extends Component {

    state = {
        author: '',
        text: '',
        messageData: []
    };

    // static propTypes = {
    //     author: PropTypes.number.isRequired,
    //     test: PropTypes.number.isRequired,
    // };

    handeleChange = (event) => {
        let id = event.target.id;

        this.setState({
            [id]: event.target.value
        });
    };

    handleClick = () => {
        this.setState((state) => {
            return {
                author: '',
                text: '',
                messageData: [...state.messageData, { author: state.author, text: state.text }]
            }
        });
    };

    handleAddBot = (author, text) => {
        this.setState((state) => {
            return {
                messageData: [...state.messageData, { author, text }]
            }
        });
    }

    render() {

        const { author, text } = this.state;

        return (
            <div>
                <MessageList messages={this.state.messageData} handleAddBot={this.handleAddBot} />
                <input id='author' value={author} onChange={this.handeleChange} placeholder='Введите имя'></input>
                <input id='text' value={text} onChange={this.handeleChange} placeholder='Введите сообщение'></input>
                <button onClick={this.handleClick}>Добавить</button>
            </div>
        )
    }
};
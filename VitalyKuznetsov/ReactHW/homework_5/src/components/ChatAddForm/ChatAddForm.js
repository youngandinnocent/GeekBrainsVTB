import React, { Component } from 'react';
import './ChatAddForm.css';
import FontAwesome from '../Messanger/addButton/addButton'; 

export default class ChatAddForm extends Component {

    render() {
        return (
            <div className='chat-add'>
                <button onClick={() => this.props.onChatAdded('Новый чат')}>Добавить чат</button>
                <FontAwesome />
            </div>
        )
    }
}
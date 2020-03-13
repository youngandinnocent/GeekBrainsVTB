import React, { Component } from 'react';

import './Message.css';

import PropTypes from 'prop-types';

export default class Message extends Component {
    state = {
        author: 'Ve',
        text: 'Hello'
    };


    handleInputChange = (e) => {
        const fieldName = e.target.name;
        this.setState({
            [fieldName]: e.target.value
        });
    }

    handleInputSend = (e) => {
        const {onSend} = this.props; //Функция в MessageField

        if(typeof onSend === 'function'){
            onSend(this.state);
        }
    }

    render() {
        const {author, text} = this.state;
        return (
            <div className='wrapper'>
                <input name="author" value={author} type="text" onChange={this.handleInputChange} placeholder="Author"/><br/>
                <textarea name="text" value={text} onChange={this.handleInputChange} placeholder="Text" /><br/>
                <button onClick={this.handleInputSend}>Send message</button>
            </div>
        )
    }

}
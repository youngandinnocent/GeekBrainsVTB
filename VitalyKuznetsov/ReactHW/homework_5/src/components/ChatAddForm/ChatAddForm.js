import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FontAwesome from '../Messanger/addButton/addButton'; 
import './ChatAddForm.css';

export default class ChatAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChatAdded(this.state.label);
    }   

    render() {
        return (
            <form className='chat-add' onSubmit={this.onSubmit}>
                <TextField name="text" className='form-input' label="Введите имя чата" onChange={this.onLabelChange} />
                <FontAwesome />
            </form>
        )
    }
}
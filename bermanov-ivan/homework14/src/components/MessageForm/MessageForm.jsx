import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.css';

export class MessageForm extends Component {
    state = {
        author: '',
        content: ''
    };
    
    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    static defaultProps = {
        onSend: () => {}
    };

    handleInput = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    };

    handleClick = () => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            onSend(this.state);
            this.setState({
                author: '',
                content: ''
            });
        }
    };

    handleKeyDownEnter = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleClick();
        }
    };

    render() {
        const { author, content } = this.state;
    
        return (
            <div className="message-form">
                <TextField className="message-form__author" label="Author" name="author" value = { author } onChange = { this.handleInput } />
                <TextField className="message-form__content" label="Content" name="content" multiline autoFocus value = { content } onKeyDown = { this.handleKeyDownEnter } onChange = { this.handleInput } />
                <Fab variant="round" color="primary" onClick = { this.handleClick }><SendIcon /></Fab>
            </div>
        );
    
    }
}

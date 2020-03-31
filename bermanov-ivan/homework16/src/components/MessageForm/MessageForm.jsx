import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.css';

export class MessageForm extends Component {
    state = {
        author: 'Human',
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

    handleSend = () => {
        const { author, content } = this.state;
        if (author && content) {
            const { onSend } = this.props;
            if (typeof onSend === 'function') {
                onSend(this.state);
                this.setState({
                    author,
                    content: ''
                });
            }
        }
    };

    handleKeyDownCtrlEnter = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleSend();
        }
    };

    render() {
        const { author, content } = this.state;
    
        return (
            <div className="message-form">
                <TextField className="message-form__author" label="Author" name="author" value = { author } onChange = { this.handleInput } />
                <TextField className="message-form__content" label="Content" name="content" multiline autoFocus value = { content } onKeyDown = { this.handleKeyDownCtrlEnter } onChange = { this.handleInput } />
                <Fab variant="round" color="primary" onClick = { this.handleSend }><SendIcon /></Fab>
            </div>
        );
    
    }
}

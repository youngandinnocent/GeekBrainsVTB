import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.css';

export class MessageForm extends Component {
    state = {
        formData: {
            author: { value: 'Human', error: false },
            content: { value: '', error: false }
        }
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
            formData: {
                ...this.state.formData,
                [fieldName]: { value: event.target.value, error: !event.target.value }
            }
        });
    };

    handleSend = () => {
        const { author, content } = this.state.formData;
        const authorValue = author.value;
        const contentValue = content.value;
        if (authorValue && contentValue) {
            const { onSend } = this.props;
            if (typeof onSend === 'function') {
                onSend({ authorValue, contentValue });
                this.setState({
                    formData: {
                        author: { ...this.state.formData.author },
                        content: { ...this.state.formData.content, value: '' }
                    }
                });
            }
        } else {
            this.setState({
                formData: {
                    author: { ...this.state.formData.author, error: authorValue ? false : true },
                    content: { ...this.state.formData.content, error: contentValue ? false : true }
                }
            });
        }
    };

    handleKeyDownCtrlEnter = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleSend();
        }
    };

    render() {
        const { author, content } = this.state.formData;

        return (
            <div className="message-form">
                <TextField
                    className="message-form__author"
                    label="Author"
                    name="author"
                    value = { author.value }
                    error = { author.error }
                    onChange = { this.handleInput }
                />
                <TextField
                    className="message-form__content"
                    label="Content"
                    name="content"
                    multiline
                    autoFocus
                    value = { content.value }
                    error = { content.error }
                    onKeyDown = { this.handleKeyDownCtrlEnter }
                    onChange = { this.handleInput }
                />
                <Fab variant="round" color="primary" onClick = { this.handleSend }><SendIcon /></Fab>
            </div>
        );
    }
}

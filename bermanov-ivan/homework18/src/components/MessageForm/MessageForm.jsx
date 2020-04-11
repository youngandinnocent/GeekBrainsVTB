import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.css';

export class MessageForm extends Component {
    state = {
        formData: [
            { author: 'Human', authorError: false },
            { content: '', contentError: false }
        ]
    };
    
    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    static defaultProps = {
        onSend: () => {}
    };

    handleInput = (event) => {
        const fieldName = event.target.name;
        if (fieldName === 'author') {
            this.setState({
                formData: [
                {
                    ...this.state.formData[0],
                    [fieldName]: event.target.value,
                    [fieldName + 'Error']: !event.target.value
                },
                { ...this.state.formData[1] }
                ]
            });
        } else {
            this.setState({
                formData: [
                { ...this.state.formData[0] },
                {
                    ...this.state.formData[1],
                    [fieldName]: event.target.value,
                    [fieldName + 'Error']: !event.target.value
                }
                ]
            });
        }
    };

    handleSend = () => {
        const { author } = this.state.formData[0];
        const { content } = this.state.formData[1];
        if (author && content) {
            const { onSend } = this.props;
            if (typeof onSend === 'function') {
                onSend({ author, content });
                this.setState({
                    formData: [
                        { ...this.state.formData[0], authorError: false },
                        { ...this.state.formData[1], content: '', contentError: false }
                    ]
                });
            }
        } else {
            this.setState({
                formData: [
                    { ...this.state.formData[0], authorError: author ? false : true },
                    { ...this.state.formData[1], contentError: content ? false : true }
                ]
            });
        }
    };

    handleKeyDownCtrlEnter = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleSend();
        }
    };

    render() {
        const { author, authorError } = this.state.formData[0];
        const { content, contentError } = this.state.formData[1];
    
        return (
            <div className="message-form">
                <TextField
                    className="message-form__author"
                    label="Author"
                    name="author"
                    value = { author }
                    error = { authorError }
                    onChange = { this.handleInput }
                />
                <TextField
                    className="message-form__content"
                    label="Content"
                    name="content"
                    multiline
                    autoFocus
                    value = { content }
                    error = { contentError }
                    onKeyDown = { this.handleKeyDownCtrlEnter }
                    onChange = { this.handleInput }
                />
                <Fab variant="round" color="primary" onClick = { this.handleSend }><SendIcon /></Fab>
            </div>
        );
    
    }
}

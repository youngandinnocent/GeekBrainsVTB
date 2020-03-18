import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.css';

export class MessageForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        author: '',
        content: ''
    };

    static propTypes = {
        onSend: PropTypes.func
    };

    static defultProps = {
        onSend: () => {},
        test: 10
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    }

    handleInputSend = () => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            onSend(this.state);
            this.setState({
                author: '',
                content: ''
            });
        }
    }

    handleKeyDownEnter = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleInputSend();
        }
    };

    render() {
        const { author, content } = this.state;
        return (
            <div>
                <TextField label="Author" name="author" value = { author } onChange = { this.handleInputChange } />
                <TextField label="Content" name="content" multiline autoFocus value = { content } onKeyDown = { this.handleKeyDownEnter } onChange = { this.handleInputChange } />
                <Fab variant="round" color="primary" onClick = { this.handleInputSend }><SendIcon /></Fab>
            </div>
        );

    }
}

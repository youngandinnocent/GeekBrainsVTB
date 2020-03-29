import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

// import { messageType } from 'components/Message';
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
        onSend: PropTypes.func.isRequired,
        // author: messageType.author,
        // content: messageType.content
    };

    static defaultProps = {
        onSend: () => {},
        // author: 'Author',
        // content: 'Message'
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
        // console.log('form: ', this.props);
        return (
            <div className="message-form">
                <TextField className="message-form__author" label="Author" name="author" value = { author } onChange = { this.handleInputChange } />
                <TextField className="message-form__content" label="Content" name="content" multiline autoFocus value = { content } onKeyDown = { this.handleKeyDownEnter } onChange = { this.handleInputChange } />
                <Fab variant="round" color="primary" onClick = { this.handleInputSend }><SendIcon /></Fab>
            </div>
        );

    }
}

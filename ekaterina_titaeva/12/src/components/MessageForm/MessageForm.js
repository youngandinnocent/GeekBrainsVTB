import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.scss';

export class MessageForm extends Component {

    state = {
        author: '',
        text: ''
    };

    static propTypes = {
        onSend: PropTypes.func
    };

    static defaultProps = {
        onSend: () => { },
    };

    handeleChange = (event) => {
        let id = event.target.id;

        this.setState({
            [id]: event.target.value
        });
    };

    handleClick = () => {
        const { onSend } = this.props;
        
        if (this.state.text !== '') {
            onSend(this.state);
            this.setState({ text: '' });
        }
    };

    handleEnterDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13)
            this.handleClick();
    }

    render() {

        const { author, text } = this.state;

        return (
            <div className='messageForm'>
                <TextField label="Author" name="author" id='author' value={author} onChange={this.handeleChange} />
                <TextField label="Text" name="text" id='text' autoFocus multiline value={text} onChange={this.handeleChange} onKeyDown={this.handleEnterDown} />
                <Fab variant='round' color='primary'><SendIcon onClick={this.handleClick} /></Fab>
            </div>
        )
    }
};
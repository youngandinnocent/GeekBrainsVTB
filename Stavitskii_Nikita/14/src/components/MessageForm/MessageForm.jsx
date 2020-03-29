import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import './MessageForm.css';

export class MessageForm extends Component {
    state = {
        author: 'User',
        text: '',
    };

    static propTypes = {
        onSend: PropTypes.func,
    };

    static defaultProps = {
        onSend: () => {},
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    }

    handleInputSend = (event) => {
        const {onSend} = this.props;

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: ''});
        }
    }

    handleKeyDownEnter = (event) =>{
        //console.log(event, event.ctrlKey);
        if(event.keyCode === 13){
            this.handleInputSend();
        }
    }

    render()
    {
        const {author, text} = this.state;
        return (
            <div className="message-form">
                <TextField className="message-author" label="Author" name="author" value={author} onChange={this.handleInputChange} />
                <TextField className="message-input" label="Text" name="text" multiline autoFocus value={text} onKeyDown={this.handleKeyDownEnter} onChange={this.handleInputChange} />
                <Fab variant="round" color="primary" onClick={this.handleInputSend}><SendIcon /></Fab>
            </div>
        );
    }

}
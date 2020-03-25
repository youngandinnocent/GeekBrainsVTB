import React, {Component} from "react";
import {TextField} from "@material-ui/core";

import './MessengerForm.css';

import SendIcon from "@material-ui/icons/Send";
import ButtonUI from "@material-ui/core/Button";

class MessengerForm extends Component {

    handleKeyDownEnter = () => (event) => {

        const { handleSendMessage, message, author } = this.props;
        if (event.ctrlKey === true && event.key === 'Enter') {
            const sendMessage = handleSendMessage(message, author);
            sendMessage();
        }
    };

    render() {
        const {message, author, handleSendMessage, handleChange} = this.props;

        return(
            <div className="messenger__messenger-form messenger-form">
                <TextField
                    onChange={handleChange()}
                    value={author}
                    name="author"
                    type="text"
                    placeholder="Автор" />

                <TextField
                    multiline
                    autoFocus
                    onKeyDown={this.handleKeyDownEnter()}
                    onChange={handleChange()}
                    value={message}
                    name="message"
                    type="text"
                    placeholder="Написать сообщение"  />

                <ButtonUI
                    variant="contained"
                    size="small"
                    color="secondary"
                    onClick={handleSendMessage(message, author)}>
                    <SendIcon />
                </ButtonUI>
            </div>
        );
    }
}

export default MessengerForm;
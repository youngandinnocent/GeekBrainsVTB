import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { ListItem, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { chatSet, chatDelete } from "../../actions/chats";

import './ChatListItem.scss';

class ChatListItem extends Component {

    handleSelectChat = () => {
        const { chat, setChat, redirect } = this.props;
        setChat(chat.id);
        redirect(chat.link);
    };

    handleClick = () => {
        const { chat, deleteChat } = this.props;
        deleteChat(chat.id);
    }

    render() {

        const { chat } = this.props;
        return (
            <ListItem className="chatListItem">
                <ListItemText primary={chat.name} onClick={this.handleSelectChat} secondary={chat.unread && "unread"} />
                <IconButton aria-label="delete" color="primary" onClick={this.handleClick}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setChat: (chatId) => dispatch(chatSet(chatId)),
        redirect: (id) => dispatch(push(id)),
        deleteChat: (id) => dispatch(chatDelete(id))
    };
};

export default connect(null, mapDispatchToProps)(ChatListItem);
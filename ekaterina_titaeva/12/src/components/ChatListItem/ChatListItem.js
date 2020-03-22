import React, { Component } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { chatSet } from "../../actions/chats";

import './ChatListItem.scss';

class ChatListItem extends Component {

    handleSelectChat = () => {
        const { chat, setChat } = this.props;
        setChat(chat.id);
    };

    render() {

        const { chat } = this.props;
        return (
            <ListItem className="chatListItem" onClick={this.handleSelectChat}>
                <Link to={chat.link}>
                    <ListItemText primary={chat.name} />
                </Link>
            </ListItem>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setChat: (chatId) => dispatch(chatSet(chatId))
    };
};

export default connect(null, mapDispatchToProps)(ChatListItem);
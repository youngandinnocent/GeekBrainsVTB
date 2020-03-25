import React, { Component } from 'react';
import {connect} from 'react-redux';
import ClassNames from "classnames";

import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FaceIcon from '@material-ui/icons/Face';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'


import {setCurrentChat, deleteChat} from "../../actions/chatActions.js";

import './ChatItem.css';


class ChatItem extends Component {

  handleSelectChat = () => () => {
    const {chatId} = this.props;
    this.props.setCurrentChat({chatId});
  };

  handleDeleteChat = () => (e) => {
    const id = e.currentTarget.id;
    this.props.deleteChat(id);
  };

  render() {
    const {current_chat_id, chatId, name} = this.props;
    const twinkle = this.props.chats[chatId].twinkle;
    const classes = ClassNames('chat-item',
      {
        'active': parseInt(current_chat_id) === chatId,
        'chat-item__show': twinkle === true,
      });

    return (
        <div className={classes} onClick={this.handleSelectChat()}>
          <ListItem button>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
          <DeleteTwoToneIcon id={chatId} onClick={this.handleDeleteChat()} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_chat_id: state.chats.current_chat_id,
    chats: state.chats.entries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChat: (id) => dispatch(setCurrentChat(id)),
    deleteChat: (id) => dispatch(deleteChat(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);

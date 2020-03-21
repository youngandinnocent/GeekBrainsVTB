import React, { Component } from 'react';
import {connect} from 'react-redux';

import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FaceIcon from '@material-ui/icons/Face';
import ClassNames from "classnames";

import {setCurrentChat} from "../../actions/chatActions.js";

import './ChatItem.css';


class ChatItem extends Component {

  handleSelectChat = () => () => {
    const {chatId} = this.props;
    this.props.setCurrentChat({chatId});
  };

  render() {
    const {current_chat_id, chatId, name} = this.props;
    const classes = ClassNames('chat-item', { 'active': parseInt(current_chat_id) === chatId});

    return (
        <div className={classes} onClick={this.handleSelectChat()}>
          <ListItem button>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_chat_id: state.chats.current_chat_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChat: (id) => dispatch(setCurrentChat(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './ChatList.css';

export class ChatList extends Component {

  state = {
    name: '',
    avatarSrc: '',
    nameError: false,
    activeChat: ''
  };

  static propTypes = {
    addChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    linkTo: PropTypes.func.isRequired,
    blink: PropTypes.shape({
      chatIndex: PropTypes.number,
      isBlink: PropTypes.bool
    }),
    chats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      messages: PropTypes.arrayOf,
      avatarSrc: PropTypes.string
    })),
  };

  static defaultProps = {
    addChat: () => {},
    deleteChat: () => {},
    linkTo: () => {},
    blink: {
      chatIndex: 0,
      isBlink: false
    },
    chats: [
      {
        id: 0,
        name: '',
        messages: [],
        avatarSrc: ''
      }
    ]
  };

  handleClickItem = (index) => {
    const { linkTo } = this.props;
    linkTo(`/chats/${index}`);

    this.setState({
      activeChat: index
    });
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
        [fieldName]: event.target.value,
        [fieldName + 'Error']: !event.target.value
    });
  }

  handleChatAdd = () => {
    const { name } = this.state;
    if (name) {
      const { addChat } = this.props;
      if (typeof addChat === 'function') {
        addChat(this.state);
        this.setState({
          name: '',
          avatarSrc: '',
          nameError: false
        });
      }
    } else {
      this.setState({
        nameError: true
      });
    }
  }

  handleChatDelete = (index) => {
    const { deleteChat } = this.props;
    deleteChat(index);
  }

  render() {
    const { chats, blink } = this.props;
    const { name, avatarSrc, nameError, activeChat } = this.state;

    return (
      <List className="chat-list">
        { chats.map((chat, index) => (
          <div key = { index }>
              <ListItem className = {
                className('chat-item', {
                  'active': chat.id === activeChat,
                  'blink': chat.id === blink.chatIndex && blink.isBlink
                })
              }
                alignItems="center"
                onClick = { () => this.handleClickItem(index + 1) }
              >
                <ListItemAvatar><Avatar src = { chat.avatarSrc } /></ListItemAvatar>
                <ListItemText primary = { chat.name } />
                <Fab variant="round" color="primary" size="small" onClick = { () => this.handleChatDelete(index + 1) }><RemoveIcon /></Fab>
              </ListItem>
            <Divider variant="inset" component="li" />
          </div>
          ))
        }
        <div className="chat-add">
          <TextField
            label="Chat name"
            name="name"
            value = { name }
            error = { nameError }
            autoFocus
            onChange = { this.handleInputChange }
          />
          <TextField
            label="Avatar source"
            name="avatarSrc"
            value = { avatarSrc }
            onChange = { this.handleInputChange }
          />
          <Fab variant="round" color="primary" onClick = { this.handleChatAdd }><AddIcon /></Fab>
        </div>
      </List>
    );
  }
}

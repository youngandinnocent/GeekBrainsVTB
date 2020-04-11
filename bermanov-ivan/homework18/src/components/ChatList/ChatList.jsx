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

import { messagesType } from 'components/MessageList';
import './ChatList.css';

export const chatsType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  messages: messagesType,
  avatarSrc: PropTypes.string
}));

export class ChatList extends Component {
  state = {
    formData: [
      { name: '', nameError: false },
      { avatarSrc: '' }
    ],
    activeChat: null
  };

  static propTypes = {
    addChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    linkTo: PropTypes.func.isRequired,
    chats: chatsType
  };

  static defaultProps = {
    addChat: () => {},
    deleteChat: () => {},
    linkTo: () => {},
    chats: [
      {
        id: 0,
        name: 'Chat0',
        messages: [],
        unread: false,
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
    if (fieldName === 'name') {
      this.setState({
        formData: [
          {
            ...this.state.formData[0],
            [fieldName]: event.target.value,
            [fieldName + 'Error']: !event.target.value
          },
          { ...this.state.formData[1] }
        ]
      });
    } else {
      this.setState({
        formData: [
          { ...this.state.formData[0] },
          {
            ...this.state.formData[1],
            [fieldName]: event.target.value
          }
        ]
      });
    }
  }

  handleChatAdd = () => {
    const { name } = this.state.formData[0];
    if (name) {
      const { addChat, chats } = this.props;
      addChat({ ...this.state.formData[0], ...this.state.formData[1] });

      this.setState({
        formData: [
          { ...this.state.formData[0], name: '', nameError: false },
          { ...this.state.formData[1], avatarSrc: '' }
        ],
        activeChat: chats.length + 1
      });
    } else {
      this.setState({
        formData: [
          { ...this.state.formData[0], nameError: true },
          { ...this.state.formData[1] }
        ]
      });
    }
  }

  handleChatDelete = (event, index) => {
    event.stopPropagation();
    const { deleteChat } = this.props;
    deleteChat(index);
  }

  render() {
    const { chats } = this.props;
    const { name, nameError } = this.state.formData[0];
    const { avatarSrc } = this.state.formData[1];
    const { activeChat } = this.state;

    return (
      <List className="chat-list">
        { chats.map((chat) => (
          <div key = { chat.id }>
              <ListItem className = {
                className('chat-item', {
                  'active': chat.id === activeChat,
                  'blink': chat.unread
                })
              }
                alignItems="center"
                onClick = { () => this.handleClickItem(chat.id) }
              >
                <ListItemAvatar><Avatar src = { chat.avatarSrc } /></ListItemAvatar>
                <ListItemText primary = { chat.name } />
                <Fab variant="round" color="primary" size="small" onClick = { (event) => this.handleChatDelete(event, chat.id) }><RemoveIcon /></Fab>
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

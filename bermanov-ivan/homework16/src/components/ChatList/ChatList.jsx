import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { messageType } from 'components/Message';
import './ChatList.css';

export class ChatList extends Component {

  state = {
    name: '',
    avatarSrc: ''
  };

  static propTypes = {
    addChat: PropTypes.func.isRequired,
    chats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape(messageType)),
        avatarSrc: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    addChat: () => {},
    chats: [
      {
        id: 0,
        name: '',
        messages: [],
        avatarSrc: ''
      }
    ]
  };

  handleClickItem = (event) => {
    const currentActive = event.target.closest('.chat-list').querySelector('.active');
    const nextActive = event.target.closest('.chat-item');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    nextActive.classList.add('active');
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
        [fieldName]: event.target.value
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
          avatarSrc: ''
        });
      }
    }
  }

  render() {
    const { chats } = this.props;
    const { name, avatarSrc } = this.state;

    return (
      <List className="chat-list">
        { chats.map((chat, index) => (
          <div key = { index }>
            <Link className="chat-link" to = { chat.link }>
              <ListItem className="chat-item" alignItems="center" onClick = { this.handleClickItem }>
                <ListItemAvatar><Avatar src = { chat.avatarSrc } /></ListItemAvatar>
                <ListItemText primary = { chat.name } />
              </ListItem>
            </Link>
            <Divider variant="inset" component="li" />
          </div>
          ))
        }
        <div className="chat-add">
          <TextField label="Chat name" name="name" value = { name } autoFocus onChange = { this.handleInputChange } />
          <TextField label="Avatar source" name="avatarSrc" value = { avatarSrc } onChange = { this.handleInputChange } />
          <Fab variant="round" color="primary" onClick = { this.handleChatAdd }><AddIcon /></Fab>
        </div>
      </List>
    );
  }
}

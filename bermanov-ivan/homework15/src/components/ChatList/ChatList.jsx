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
    src: ''
  };

  static propTypes = {
    addChat: PropTypes.func.isRequired,
    chats: PropTypes.shape({
      [/\d+/]: {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape(messageType)),
        avatarSrc: PropTypes.string.isRequired
      }
    })
  };

  static defaultProps = {
    addChat: () => {}
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
          src: ''
        });
      }
    }
  }

  render() {
    const { chats } = this.props;
    const { name, src } = this.state;

    // приемлема ли такая реализация разворачивания списка чатов, или нужно использовать match?
    return (
      <List className="chat-list">
        { Object.keys(chats).map((id) => (
          <div key = { +id }>
            <Link className="chat-link" to = {`/chats/${id}`}>
              <ListItem className="chat-item" alignItems="center" onClick = { this.handleClickItem }>
                <ListItemAvatar><Avatar src = { chats[id].avatarSrc } /></ListItemAvatar>
                <ListItemText primary = { chats[id].name } />
              </ListItem>
            </Link>
            <Divider variant="inset" component="li" />
          </div>
          ))
        }
        <div className="chat-add">
          <TextField label="Chat name" name="name" value = { name } autoFocus onChange = { this.handleInputChange } />
          <TextField label="Avatar source" name="src" value = { src } onChange = { this.handleInputChange } />
          <Fab variant="round" color="primary" onClick = { this.handleChatAdd }><AddIcon /></Fab>
        </div>
      </List>
    );
  }
}

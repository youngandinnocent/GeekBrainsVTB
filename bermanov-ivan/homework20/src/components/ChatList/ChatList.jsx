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

// import { messagesType } from 'components/MessageList';
import './ChatList.css';

export const chatsType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  unread: PropTypes.bool,
  marked: PropTypes.bool,
  avatarSrc: PropTypes.string
  // id: PropTypes.number,
  // name: PropTypes.string,
  // messages: messagesType,
  // avatarSrc: PropTypes.string
}));

export class ChatList extends Component {
  state = {
    formData: {
      name: { value: '', error: false },
      avatarSrc: { value: '' }
    }
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
        unread: false,
        marked: true,
        avatarSrc: ''
      }
      // {
      //   id: 0,
      //   name: 'Chat0',
      //   messages: [],
      //   unread: false,
      //   avatarSrc: ''
      // }
    ]
  };

  handleClickItem = (index) => {
    const { linkTo } = this.props;
    linkTo(`/chats/${index}`);
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    if (fieldName === 'name') {
      this.setState({
        formData: {
            ...this.state.formData,
            [fieldName]: { value: event.target.value, error: !event.target.value }
        }
      });
    } else {
      this.setState({
        formData: {
            ...this.state.formData,
            [fieldName]: { value: event.target.value }
        }
      });
    }
  }

  handleChatAdd = () => {
    const { name } = this.state.formData;
    if (name.value) {
      const { addChat } = this.props;
      addChat({ ...this.state.formData });
      this.setState({
        formData: {
          name: { value: '', error: false },
          avatarSrc: { value: '' }
        }
      });
    } else {
      this.setState({
        formData: {
          name: { ...this.state.formData.name, error: true },
          avatarSrc: { ...this.state.formData.avatarSrc }
        }
      });
    }
  }

  handleChatDelete = (event, index) => {
    event.stopPropagation();
    const { deleteChat } = this.props;
    deleteChat(index);
  }

  render() {
    const { chats} = this.props;
    const { name, avatarSrc } = this.state.formData;

    return (
      <List className="chat-list">
        { chats.map((chat) => (
          <div key = { chat.id }>
              <ListItem className = {
                className('chat-item', {
                  'active': chat.marked,
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
            value = { name.value }
            error = { name.error }
            autoFocus
            onChange = { this.handleInputChange }
          />
          <TextField
            label="Avatar source"
            name="avatarSrc"
            value = { avatarSrc.value }
            onChange = { this.handleInputChange }
          />
          <Fab variant="round" color="primary" onClick = { this.handleChatAdd }><AddIcon /></Fab>
        </div>
      </List>
    );
  }
}

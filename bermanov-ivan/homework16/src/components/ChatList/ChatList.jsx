import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
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

// import { messageType } from 'components/Message';
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
    // chats: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.number.isRequired,
    //     name: PropTypes.string.isRequired,
    //     messages: PropTypes.arrayOf(PropTypes.shape(messageType)),
    //     avatarSrc: PropTypes.string.isRequired
    //   })
    // )
    chats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      messages: PropTypes.arrayOf,
      avatarSrc: PropTypes.string
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
    // console.log('link: ', event.currentTarget.parentNode.href.replace(/http\:\/\/localhost\:8080/, ''));
    const element = event.currentTarget.parentNode.href.replace(/http\:\/\/localhost\:8080/, '');
    this.setState({
      activeChat: element
    });

    // const currentActive = event.target.closest('.chat-list').querySelector('.active');
    // const nextActive = event.target.closest('.chat-item');
    // if (currentActive) {
    //   currentActive.classList.remove('active');
    // }
    // nextActive.classList.add('active');
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
        [fieldName]: event.target.value,
        [fieldName + 'Error']: event.target.value ? false : true
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

  render() {
    const { chats } = this.props;
    // console.log('chats: ', chats);
    const { name, avatarSrc, nameError, activeChat } = this.state;

    // console.log('chats.filter((chat) => chat.link === activeChat): ', chats.filter((chat) => chat.link === activeChat)[0]);
    // console.log('activeChat: ', activeChat);

    const classes = className('chat-item', {
      'active': chats.filter((chat) => chat.link === activeChat)[0]
    });
  
    return (
      <List className="chat-list">
        { chats.map((chat, index) => (
          <div key = { index }>
            <Link className="chat-link" to = { chat.link } >
              <ListItem className = { classes } alignItems="center" onClick = { this.handleClickItem } >
                <ListItemAvatar><Avatar src = { chat.avatarSrc } /></ListItemAvatar>
                <ListItemText primary = { chat.name } />
              </ListItem>
            </Link>
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

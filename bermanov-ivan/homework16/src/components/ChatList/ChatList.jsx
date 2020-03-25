import React, { Component } from 'react';
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

import './ChatList.css';

export class ChatList extends Component {
  constructor(props) {
      super(props);
  }

  state = {
    name: '',
    src: ''
  };

  handleClickItem = (event) => {
    const currentActive = event.target.closest('.chat-list').querySelector('.active');
    // console.log('currentActive: ', currentActive);
    const nextActive = event.target.closest('.item');
    // console.log('nextActive: ', nextActive);
    if (currentActive) {
      currentActive.classList.toggle('active');
    }
    nextActive.classList.toggle('active');
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
        [fieldName]: event.target.value
    });
  }

  handleChatAdd = () => {
    const { onSend } = this.props;
    if (typeof onSend === 'function') {
        onSend(this.state);
        this.setState({
          name: '',
          src: ''
        });
    }
  }

  render() {
    const { chats } = this.props;
    const { name, src } = this.state;

    return (
      <List className="chat-list">
        { chats.map((chat, index) => (
          <div key = { index }>
            <Link className="chat-link" to = { chat.link }>
              <ListItem className="item" alignItems="center" onClick = { this.handleClickItem }>
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
          <TextField label="Avatar source" name="src" value = { src } onChange = { this.handleInputChange } />
          <Fab variant="round" color="primary" onClick = { this.handleChatAdd }><AddIcon /></Fab>
        </div>
      </List>
    );

    // return (
    //   <List className="chat-list">
    //     { Object.keys(chats).map((id) => (
    //       <div key = { +id }>
    //         <Link className="chat-link" to = {`/chats/${id}`}>
    //           <ListItem className="item" alignItems="center" onClick = { this.handleClickItem }>
    //             <ListItemAvatar><Avatar src = { chats[id].avatarSrc } /></ListItemAvatar>
    //             <ListItemText primary = { chats[id].name } />
    //           </ListItem>
    //         </Link>
    //         <Divider variant="inset" component="li" />
    //       </div>
    //       ))
    //     }
    //     <div className="chat-add">
    //       <TextField label="Chat name" name="name" value = { name } autoFocus onChange = { this.handleInputChange } />
    //       <TextField label="Avatar source" name="src" value = { src } onChange = { this.handleInputChange } />
    //       <Fab variant="round" color="primary" onClick = { this.handleChatAdd }><AddIcon /></Fab>
    //     </div>
    //   </List>
    // );


    // const { chats } = this.state;
    // return (
    //   <List className="chat-list">
    //     { chats.map((chat, index) => (
    //       <div key = { index }>
    //         <ListItem alignItems="center">
    //           <ListItemAvatar><Avatar alt = { chat.avatarAlt } src = { chat.avatarSrc } /></ListItemAvatar>
    //           <ListItemText primary = { chat.chatTitle } />
    //         </ListItem>
    //         <Divider variant="inset" component="li" />
    //       </div>
    //       ))
    //     }
    //   </List>
    // );
  }
}

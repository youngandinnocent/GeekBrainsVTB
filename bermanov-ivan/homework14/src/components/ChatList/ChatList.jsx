import React, { Component } from 'react';
import className from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './ChatList.css';

// let classes;

export class ChatList extends Component {

  state = {
    chats: [
      {
        id: 1,
        name: 'GeekBrains.JS+React для молодых специалистов Банка ВТБ (ПАО)',
        avatarSrc: ''
      },
      {
        id: 2,
        name: 'VTB_Scrubs',
        avatarSrc: ''
      },
      {
        id: 3,
        name: 'Стажеры ВТБ',
        avatarSrc: ''
      },
      {
        id: 4,
        name: 'FrontEndDev',
        avatarSrc: ''
      },
      {
        id: 5,
        name: 'Flutter Mobile Dev | Skill-Branch',
        avatarSrc: ''
      }
    ]
  }

  // handleClickItem = (event) => {
  //   const currentActive = event.target.closest('.chat-list').querySelector('.active');
  //   const nextActive = event.target.closest('.chat-item');
  //   if (currentActive) {
  //     currentActive.classList.toggle('active');
  //   }
  //   nextActive.classList.toggle('active');
  // };

  handleClickItem = (event) => {
    // console.log(event.currentTarget);
    // console.log(!!event.currentTarget);
    classes = className('chat-item', {
      'active': !!event.currentTarget
    });
    // return classes;
  // console.log(classes);
  };

  render() {
    const { chats } = this.state;
    // let classes = this.handleClickItem;
    let classes;

    return (
      <List className="chat-list">
        { chats.map((chat) => (
          <div key = { chat.id }>
            <ListItem className = { classes } alignItems="center" onClick = { this.handleClickItem }>
                <ListItemAvatar><Avatar src = { chat.avatarSrc } /></ListItemAvatar>
                <ListItemText primary = { chat.name } />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
          ))
        }
      </List>
    );
  }
}

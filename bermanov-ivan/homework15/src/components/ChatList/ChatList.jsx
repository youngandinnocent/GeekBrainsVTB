import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import './ChatList.css';

export class ChatList extends Component {
  constructor(props) {
      super(props);
  }

  handleClickLink = (event) => {
    const currentActive = event.target.closest('.chat-list').querySelector('.active');
    console.log('currentActive: ', currentActive);
    const nextActive = event.target.closest('.item');
    console.log('nextActive: ', nextActive);
    if (currentActive) {
      currentActive.classList.toggle('active');
    }
    nextActive.classList.toggle('active');
  };

  render() {
    const { chats } = this.props;
    return (
      <List className="chat-list">
        { Object.keys(chats).map((id) => (
          <div key = { +id }>
            <Link className="chat-link" to = {`/chats/${id}`}>
              <ListItem className="item" alignItems="center" onClick = { this.handleClickLink }>
                <ListItemAvatar><Avatar alt = { chats[id].avatarAlt } src = { chats[id].avatarSrc } /></ListItemAvatar>
                <ListItemText primary = { chats[id].name } />
              </ListItem>
            </Link>
            <Divider variant="inset" component="li" />
          </div>
          ))
        }
      </List>
    );
  }
}

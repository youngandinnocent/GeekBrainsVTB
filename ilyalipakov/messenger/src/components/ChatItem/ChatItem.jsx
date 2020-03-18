import React, { Component } from 'react';

import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import FaceIcon from '@material-ui/icons/Face';

import './ChatItem.css';

class ChatItem extends Component {
  render() {
    return (
        <div className="chat-item">
          <ListItem button>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="CHAT" />
          </ListItem>
        </div>
    );
  }
}

export default ChatItem;

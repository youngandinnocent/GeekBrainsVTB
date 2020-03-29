import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import './ChatList.css';

export class ChatList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <List className="chat-list">
            <ListItem alignItems="center">
              <ListItemAvatar><Avatar alt="GeekBrains.JS" src="" /></ListItemAvatar>
              <ListItemText primary="GeekBrains.JS+React для молодых специалистов Банка ВТБ (ПАО)"/>
            </ListItem>
            <Divider variant="inset" component="li" />
      
            <ListItem alignItems="center">
              <ListItemAvatar><Avatar alt="VTB_Scrubs" src="" /></ListItemAvatar>
              <ListItemText primary="VTB_Scrubs" />
            </ListItem>
            <Divider variant="inset" component="li" />
      
            <ListItem alignItems="center">
              <ListItemAvatar><Avatar alt="Стажеры ВТБ" src="" /></ListItemAvatar>
              <ListItemText primary="Стажеры ВТБ" />
            </ListItem>
            <Divider variant="inset" component="li" />
      
            <ListItem alignItems="center">
              <ListItemAvatar><Avatar alt="FrontEndDev" src="" /></ListItemAvatar>
              <ListItemText primary="FrontEndDev" />
            </ListItem>
            <Divider variant="inset" component="li" />
      
            <ListItem alignItems="center">
              <ListItemAvatar><Avatar alt="Flutter" src="" /></ListItemAvatar>
              <ListItemText primary="Flutter Mobile Dev | Skill-Branch"/>
            </ListItem>
          </List>
        );
    }
}

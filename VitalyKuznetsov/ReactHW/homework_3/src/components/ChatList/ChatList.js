import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ForumIcon from '@material-ui/icons/Forum';
import './ChatList.css';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {

  const classes = useStyles();

  return (
    <div  id='simple' className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <ForumIcon color="primary" /> 
          </ListItemIcon>
          <ListItemText primary='Mom' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ForumIcon color="primary" /> 
          </ListItemIcon>
          <ListItemText primary="Andrew" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
            <ForumIcon color="primary" /> 
          </ListItemIcon>
          <ListItemText primary="Stefan" />
        </ListItem>
        <ListItemLink href="#simple-list">
            <ListItemIcon>
            <ForumIcon color="primary" /> 
          </ListItemIcon>
          <ListItemText primary="Grandma" />
        </ListItemLink>
      </List>

    </div>
  );
}
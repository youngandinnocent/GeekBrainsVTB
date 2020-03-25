import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, ListItem, Button } from '@material-ui/core';

import { ButtonAddNewChat } from '../ButtonAddNewChat';


export const ChatList = ({ chats, onAddNewChat }) => {
    // debugger;
    return <Grid item xs={3} className='chat__list'>
        <List>
            {
                Object.entries(chats).map( ([id, chat]) =>
                    <ListItem key={id}>
                        <Button fullWidth={true}>
                            <Link to={`/chat/${id}`}>
                                {chat.name}
                            </Link>
                        </Button>
                    </ListItem>
                )
            }
        </List>
        <ButtonAddNewChat onAddNewChat={onAddNewChat}/>
    </Grid>
}
    
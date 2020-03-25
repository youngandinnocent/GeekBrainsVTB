import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';


export const ChatList = () =>
    <Grid item xs={3} className='chat__list'>
        <List>
            <ListItem>Прихожая</ListItem>
            <ListItem>Гостинная</ListItem>
            <ListItem>Кухня</ListItem>
        </List>
    </Grid>
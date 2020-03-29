import React from 'react';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { Header } from '../Header';
import ChatsListContainer from '../../containers/ChatListContainer';
import { Content } from '../Content';


export const Layout = ({ match, updateCurrentChatID }) => {
    let chatID = parseInt(match.params.id);
    if (chatID) updateCurrentChatID(chatID);
    
    return <Container maxWidth="md">
        <Grid container>
            <Header />
            <ChatsListContainer />
            <Content />
        </Grid>
    </Container>
}

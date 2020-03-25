import React from 'react';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { Header } from '../Header';
import { ChatList } from '../ChatList';
import { Content } from '../Content';


export const Layout = ({ messages, chats, text, handleSubmit, handlePressEnter, onChangeText, onAddNewChat }) =>
    <Container maxWidth="md">
        <Grid container>
            <Header />
            <ChatList chats={chats} onAddNewChat={onAddNewChat}/>
            <Content
                handleSubmit={handleSubmit} 
                handlePressEnter={handlePressEnter} 
                onChangeText={onChangeText}
                messages={messages}
                text={text}
            />
        </Grid>
    </Container>

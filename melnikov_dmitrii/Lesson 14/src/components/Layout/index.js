import React from 'react';
import { Grid } from '@material-ui/core';

import { Header } from '../Header';
import { ChatList } from '../ChatList';
import { Content } from '../Content';


export const Layout = ({ messages, handleSubmit, handlePressEnter, onChangeText, text }) =>
    <Grid container>
        <Header />
        <ChatList />
        <Content 
            handleSubmit={handleSubmit} 
            handlePressEnter={handlePressEnter} 
            onChangeText={onChangeText}
            messages={messages}
            text={text}
        />
    </Grid>
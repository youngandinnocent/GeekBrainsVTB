import React from 'react';
import { Grid } from '@material-ui/core';

import { Messages } from '../Messages';
import { MessageForm } from '../MessageForm';


export const Content = ({ messages, handleSubmit, handlePressEnter, onChangeText, text }) =>
    <Grid item xs={9}>
        <Messages messages={messages}/>
        <MessageForm 
            handleSubmit={handleSubmit} 
            handlePressEnter={handlePressEnter} 
            onChangeText={onChangeText} 
            text={text}
        />
    </Grid>
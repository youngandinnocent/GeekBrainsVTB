import React from 'react';
import { Grid } from '@material-ui/core';

import { MessageField } from '../MessageField';
import { AddButtonMessage } from '../AddMessageButton';


export const MessageForm = ({ handleSubmit, handlePressEnter, text, onChangeText }) => 
    <Grid className="form" component='form' container spacing={3} onSubmit={handleSubmit}>  
        <MessageField text={text}
            onChangeText={onChangeText} 
            handlePressEnter={handlePressEnter}/>
        <AddButtonMessage />
    </ Grid>
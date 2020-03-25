import React from 'react';
import { Grid } from '@material-ui/core';

import { MessageField } from '../MessageField';
import { AddButtonMessage } from '../AddMessageButton';


export const MessageForm = ({ handleSubmit }) => 
    <Grid className="form" component='form' container spacing={3} onSubmit={handleSubmit}>  
        <MessageField />
        <AddButtonMessage />
    </ Grid>
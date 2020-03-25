import React from 'react';
import { Grid } from '@material-ui/core';

import MessagesContainer from '../../containers/MessagesContainer';
import MessageFormContainer from '../../containers/MessageFormContainer';


export const Content = () =>
    <Grid item xs={9} className="chat">
        <MessagesContainer />
        <MessageFormContainer />   
    </Grid>
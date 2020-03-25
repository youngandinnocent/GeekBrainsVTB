import React from 'react';
import Grid from '@material-ui/core/Grid';



export const Message = ({ author, text }) => 
    <Grid item className={`message ${author.toLowerCase()}`}>
        <p className="message__author">{ author }:</p>
        <p className="message__text">{ text }</p>
    </Grid> 
import React from 'react';
import {Grid, InputBase} from '@material-ui/core';


export const MessageField = ({ text, onChangeText, handlePressEnter }) => 
    <Grid item xs={8}>
        <InputBase 
            className="message__field form__field"
            fullWidth={true}
            required={true}
            value={text}
            onChange={onChangeText}
            onKeyPress={handlePressEnter}>
        </InputBase>
    </Grid>
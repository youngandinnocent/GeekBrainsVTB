import React from 'react';
import { Grid } from '@material-ui/core';

import { Messages } from '../Messages';
import { MessageForm } from '../MessageForm';


export const Content = ({ messages, handleSubmit, handlePressEnter, onChangeText, text }) =>
    <Grid item xs={9} className="chat">
        {
            (messages === undefined || messages.length === 0) ?
                <p className='text--align--center'>Please pick some chat</p> :
                <>
                    <Messages messages={messages}/>
                    <MessageForm 
                        handleSubmit={handleSubmit} 
                        handlePressEnter={handlePressEnter} 
                        onChangeText={onChangeText} 
                        text={text}
                    />
                </>
        }      
    </Grid>
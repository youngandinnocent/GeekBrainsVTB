import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Message } from '../Message';


export const Messages = ({ messages }) =>
    <Grid container direction="column" className="mesages messages__list">
        {
            (messages === undefined || messages.length === 0) ?
                <p className='text--align--center'>Please pick some chat</p> :
                messages.map( (message, i) =>
                    <Message key={i} {...message}/>
                )
        }
    </Grid>
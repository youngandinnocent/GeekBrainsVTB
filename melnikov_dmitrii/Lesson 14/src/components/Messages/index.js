import React from 'react';
import Grid from '@material-ui/core/Grid';

import { Message } from '../Message';


export const Messages = ({ messages }) =>
    <Grid container direction="column" className="mesages messages__list">
        {
            messages.map( (message, i) =>
                <Message key={i} {...message}/>
            )
        }
    </Grid>
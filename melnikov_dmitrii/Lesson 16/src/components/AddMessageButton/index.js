import React from 'react';
import {Grid, Button} from '@material-ui/core';


export const AddButtonMessage = () =>
    <Grid item xs={4} >
        <Button className="button button--add form__button" type="submit">
            Добавить сообщение
        </Button>
    </Grid>
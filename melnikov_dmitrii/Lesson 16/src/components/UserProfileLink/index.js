import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';


export const UserProfileLink = () =>
    <Grid item xs={12} className="text--align--right">
        <Link to='/profile'>
            Аккаунт
        </Link>
    </Grid> 
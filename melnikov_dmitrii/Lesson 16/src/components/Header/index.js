import React from 'react';
import { Grid } from '@material-ui/core';

import { UserProfileLink } from '../UserProfileLink'


export const Header = () =>
    <Grid container alignContent='flex-end' className="header">
        <UserProfileLink />
    </Grid>
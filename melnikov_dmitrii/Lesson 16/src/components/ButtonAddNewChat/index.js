import React from 'react';
import { Button } from '@material-ui/core';


export const ButtonAddNewChat = ({ onAddNewChat }) =>
    <Button color='secondary' onClick={onAddNewChat}>
        Добавить новый чат
    </Button>
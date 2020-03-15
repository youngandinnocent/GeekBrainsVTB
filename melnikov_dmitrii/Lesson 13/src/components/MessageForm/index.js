import React from 'react';

import { MessageField } from '../MessageField';
import { AddButtonMessage } from '../AddMessageButton';


export const MessageForm = ({ handleSubmit, text, onChangeText }) => 
    <form className="form" onSubmit={handleSubmit}>  
        <MessageField text={text} onChangeText={onChangeText} />
        <AddButtonMessage />
    </ form>
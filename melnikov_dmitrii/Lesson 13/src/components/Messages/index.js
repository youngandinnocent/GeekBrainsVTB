import React from 'react';
import { Message } from '../Message';


export const Messages = ({ messages }) => 
    <ul className="mesages messages__list">
        {
            messages.map( (message, i) =>
                <Message key={i} {...message}/>
            )
        }
    </ul>
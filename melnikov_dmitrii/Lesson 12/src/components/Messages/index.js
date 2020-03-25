import React from 'react';
import { Message } from '../Message';


export const Messages = ({ messages }) => 
    <ul className="mesages mesages__list">
        {
            messages.map( (text, i) =>
                <Message key={i} text={text}/>
            )
        }
    </ul>
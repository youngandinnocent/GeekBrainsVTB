import React from 'react';


export const Message = ({ author, text }) => 
    <li className="message">
        <span className="message__author">{ author }:</span>
        <span className="message__text">{ text }</span>
    </li>
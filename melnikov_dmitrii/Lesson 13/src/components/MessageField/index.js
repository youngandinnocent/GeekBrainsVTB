import React from 'react';


export const MessageField = ({ text, onChangeText }) => 
    <>
        <textarea className="message__field form__field" cols="100" rows="1" value={text} onChange={onChangeText}>
        </textarea>
    </>
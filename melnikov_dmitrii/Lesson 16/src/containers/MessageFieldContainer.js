import React from 'react';
import {connect} from 'react-redux';

import { changeMessageText, addNewMessageByKeyPress } from '../store/actions/creatorActions';
import { MessageField } from '../components/MessageField';
import { author } from '../../src/helper/testData';


const MessageFieldContainer = ({ text, chatID, onChangeText, handlePressEnter }) =>
    <MessageField 
        text={text} 
        onChangeText={onChangeText} 
        handlePressEnter={(evt) => handlePressEnter(evt, chatID)}
    />


const mapStateToProps = (store) => ({
    text: store.onChangeText,
    chatID: store.currentChatID
});

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (evt) => dispatch(changeMessageText(evt)),
    handlePressEnter: (evt, chatID) => dispatch(addNewMessageByKeyPress(evt, chatID, author))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageFieldContainer)
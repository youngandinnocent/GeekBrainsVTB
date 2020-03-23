import React from 'react';
import {connect} from 'react-redux';

import { addNewMessageBySubmit } from '../store/actions/actionCreators';
import { MessageForm } from '../components/MessageForm';
import { author } from '../../src/helper/testData';


const MessageFormContainer = ({ chatID, handleSubmit }) =>
    <MessageForm handleSubmit={(evt) => handleSubmit(evt, chatID)}/>


const mapStateToProps = (store) => ({
    chatID: store.currentChatID
});

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (evt, chatID) => dispatch(addNewMessageBySubmit(evt, chatID, author))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageFormContainer)
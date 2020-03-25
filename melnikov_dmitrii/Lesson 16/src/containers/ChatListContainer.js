import React from 'react';
import {connect} from 'react-redux';

import { addNewChat } from '../store/actions/actionCreators';
import { ChatList } from '../components/ChatList';


const ChatListContainer = ({ chats, onAddNewChat }) =>
    <ChatList chats={chats} onAddNewChat={onAddNewChat}/>


const mapStateToProps = (store) => ({
    chats: store.chats
});
const mapDispatchToProps = (dispatch) => ({
    onAddNewChat: () => dispatch(addNewChat())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatListContainer)
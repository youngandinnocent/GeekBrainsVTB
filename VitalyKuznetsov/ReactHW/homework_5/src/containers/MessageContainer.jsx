import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Messanger } from '../components/Messanger/Messanger';
import { chatsLoad, chatsSend } from '../actions/chats';

class MessangerContainer extends Component {
    componentDidMount() {
        const { loadChats } = this.props;
        loadChats();
    }

    handleMessageSend = (message) => {
        const {sendMessage, chatId} = this.props;
    
        sendMessage({
            ...message,
            chatId,
        });

        render()
        {
            const {chats, messages} = this.props;
            return (<Messanger chats={chats} messages={messages} sendMessage={this.handleMessageSend}  />);
        }
    }    
}

function mapStateToProps(state, ownProps){
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${chats[key].id}`});
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MessageField } from 'components/MessageField';
import { chatsLoad, chatsSend } from 'actions/chats';

export class MessangerContainer extends Component {

    componentDidMount() {
        const { loadChats } = this.props;
        loadChats();
    }

    handleMessageSend = (message) => {
        const { sendMessage, chatId } = this.props;
        sendMessage({ ...message, chatId });
        // const { match } = this.props;

        // const chat = chats[match.params.id];
        // const messages = [...this.messages, message];

        // chat.messages = messages;

        // this.setState({
        //     chats: {
        //         ...this.state.chats,
        //         [match.params.id]: chat
        //     }
        // });
    };

    render() {
        const { chats, messages } = this.props;
        return (
            <MessageField chats = { chats } messages = { messages } sendMessage = { this.handleMessageSend } />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const { match } = ownProps;

    let messages = null;

    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
    }

    // let chatsArrayForShow = [];
    const chatsArrayForShow = Object.keys(chats)
        .reduce((acc, chat) => [
            ...acc,
            {
                name: chats[chat].name,
                link: `/chats/${chats[chat].id}`
            }
        ], []);
    
    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message))
    };
}

export const MessangerRedux = connect(mapStateToProps, mapDispatchToProps)(MessangerContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Layout } from 'components/Layout';
import { chatsLoad, chatsMessageSend, chatsAdd, chatsDelete } from 'actions/chats';

export class LayoutContainer extends Component {

    componentDidMount() {
        const { loadChats, chats } = this.props;
        if (!chats.length) {
            loadChats();
        }
    }

    handleNavigate = (link) => {
        const { linkTo } = this.props;
        linkTo(link);
    };

    handleMessageSend = (message) => {
        const { sendMessage, chatIndex } = this.props;

        sendMessage({
            chatIndex,
            ...message,
            isBlink: false
        });
    };

    handleChatAdd = (chat) => {
        const { addChat, newChatIndex, linkTo } = this.props;

        const newChat = {
            id: newChatIndex,
            name: chat.name,
            messages: [],
            avatarSrc: chat.avatarSrc
        };

        addChat({
            newChatIndex,
            ...newChat
        });

        linkTo(`/chats/${newChatIndex}`);
    }

    handleChatDelete = (index) => {
        const { chatState, deleteChat, linkTo } = this.props;

        const newState = Object.keys(chatState)
            .filter((chatIndex) => +chatIndex !== index)
            .reduce((acc, key, i) => ({
                ...acc,
                [i + 1]: {
                    id: i + 1,
                    name: chatState[key].name,
                    messages: chatState[key].messages,
                    avatarSrc: chatState[key].avatarSrc
                }
        }), {});

        deleteChat({ newState });

        linkTo('/');
    }

    render() {
        const { chats, messages, profileName, blink } = this.props;

        return (
            <Layout
                chats = { chats }
                messages = { messages }
                profileName = { profileName }
                blink = { blink }
                sendMessage = { this.handleMessageSend }
                addChat = { this.handleChatAdd }
                deleteChat = { this.handleChatDelete }
                linkTo = { this.handleNavigate }
            />
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

    const chatsArrayForShow = Object.keys(chats).reduce((acc, key) => [
        ...acc,
        {
            id: chats[key].id,
            name: chats[key].name,
            avatarSrc: chats[key].avatarSrc
        }
    ], []);

    const lastChatIndex = Object.keys(chats).length ? Object.keys(chats).length : 0;
    const newChatIndex = lastChatIndex + 1;

    const profileName = state.profile.entries.name;

    const blink = {
        chatIndex: match ? +match.params.id : null,
        isBlink: messages && messages.length ? messages[messages.length - 1].isBlink : null
    };

    const chatState = chats;

    return {
        chatState,
        chats: chatsArrayForShow,
        messages,
        chatIndex: match ? match.params.id : null,
        newChatIndex,
        profileName,
        blink
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsMessageSend(message)),
        addChat: (chat) => dispatch(chatsAdd(chat)),
        deleteChat: (newState) => dispatch(chatsDelete(newState)),
        linkTo: (path) => dispatch(push(path))
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

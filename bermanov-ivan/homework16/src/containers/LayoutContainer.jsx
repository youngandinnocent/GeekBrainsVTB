import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'components/Layout';
import { chatsLoad, chatsAdd, chatsMessageSend } from 'actions/chats';

export class LayoutContainer extends Component {

    componentDidMount() {
        const { loadChats } = this.props;
        loadChats();
    }

    componentDidUpdate() {
        const { messages } = this.props;
        if (messages && messages.length) {
            const { author } = messages[messages.length - 1];
            if (author !== 'NDR-114') {
                setTimeout(() => {
                    const { messages } = this.props;
                    if (messages[messages.length - 1].author !== 'NDR-114') {
                        this.handleMessageSend({
                            author: 'NDR-114',
                            content: `Hello, ${author}, my name is Andrew`
                        });
                    }
                }, 1000);
            }
        }
    }

    handleMessageSend = ({ author, content }) => {
        const { sendMessage, chatIndex } = this.props;

        const message = {};
        if (author) {
            message.author = author;
        }
        if (content) {
            message.content = content;
        }

        sendMessage({
            chatIndex,
            ...message
        });
    };

    handleChatAdd = (chat) => {
        const { addChat, chats } = this.props;
        const chatIndex = `${Object.keys(chats).length + 1}`;

        const newChat = {
            id: chatIndex,
            name: chat.name,
            messages: [],
            avatarSrc: chat.src
        };

        addChat({
            chatIndex,
            ...newChat
        });
    }

    render() {
        const { chats, messages } = this.props;

        return (<Layout chats = { chats } messages = { messages } sendMessage = { this.handleMessageSend } addChat = { this.handleChatAdd } />);
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
            name: chats[key].name,
            link: `/chats/${chats[key].id}`
        }
    ], []);

    return {
        chats: chatsArrayForShow,
        messages,
        chatIndex: match ? match.params.id : null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        addChat: (chat) => dispatch(chatsAdd(chat)),
        sendMessage: (message) => dispatch(chatsMessageSend(message))
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

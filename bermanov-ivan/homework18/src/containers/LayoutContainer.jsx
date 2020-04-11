import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Layout } from 'components/Layout';
import { chatsLoad, chatsMessageSend, chatsAdd, chatsDelete, chatsLoad2 } from 'actions/chats';
import { chatsType } from 'components/ChatList';
import { messagesType } from 'components/MessageList';

export class LayoutContainer extends Component {

    static propTypes = {
        loadChats: PropTypes.func.isRequired,
        sendMessage: PropTypes.func.isRequired,
        addChat: PropTypes.func.isRequired,
        deleteChat: PropTypes.func.isRequired,
        linkTo: PropTypes.func.isRequired,

        chatsState: PropTypes.object.isRequired,
        chats: chatsType,
        messages: messagesType,
        chatIndex: PropTypes.string,
        newChatIndex: PropTypes.number.isRequired,
        profileName: PropTypes.string,
        isLoading: PropTypes.bool.isRequired,
        isError: PropTypes.bool
      };

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
        });
    };

    handleChatAdd = (chat) => {
        const { addChat, newChatIndex, linkTo } = this.props;

        const newChat = {
            id: newChatIndex,
            name: chat.name,
            avatarSrc: chat.avatarSrc
        };

        addChat({
            newChatIndex,
            ...newChat
        });

        linkTo(`/chats/${newChatIndex}`);
    }

    handleChatDelete = (index) => {
        const { chatsState, deleteChat, linkTo } = this.props;

        const newState = Object.keys(chatsState)
            .filter((chatIndex) => +chatIndex !== index)
            .reduce((acc, key, i) => ({
                ...acc,
                [i + 1]: {
                    id: i + 1,
                    name: chatsState[key].name,
                    messages: chatsState[key].messages,
                    unread: chatsState[key].unread,
                    avatarSrc: chatsState[key].avatarSrc
                }
        }), {});

        deleteChat({ newState });

        linkTo('/');
    }

    render() {
        const {
            chats,
            messages,
            profileName,
            isLoading,
            isError
        } = this.props;

        return (
            <Layout
                chats = { chats }
                messages = { messages }
                profileName = { profileName }
                isLoading = { isLoading }
                isError = { isError }
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
            unread: chats[key].unread,
            avatarSrc: chats[key].avatarSrc
        }
    ], []);

    const lastChatIndex = Object.keys(chats).length ? Object.keys(chats).length : 0;
    const newChatIndex = lastChatIndex + 1;

    const profileName = state.profile.entries.name;

    const chatsState = chats;

    return {
        chatsState,
        chats: chatsArrayForShow,
        messages,
        chatIndex: match ? match.params.id : null,
        newChatIndex,
        profileName,
        isLoading: state.chats.loading,
        isError: state.chats.error
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

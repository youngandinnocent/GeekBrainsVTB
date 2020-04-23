import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Layout } from 'components/Layout';
import { chatsLoad, chatsMessageSend, chatsAdd, chatsDelete } from 'actions/chats';
import { chatsType } from 'components/ChatList';
import { messagesType } from 'components/MessageList';

// ProfileContainer
import { profileLoad, profileChange } from 'actions/profile';

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

        // ProfileContainer
        const { loadProfile, content } = this.props;
        if (!content) {
            loadProfile();
        }
    }

    handleNavigate = (link) => {
        const { linkTo } = this.props;
        linkTo(link);
    };

    handleMessageSend = ({ authorValue, contentValue }) => {
        const { sendMessage, chatIndex } = this.props;

        sendMessage({
            chatIndex,
            author: authorValue,
            content: contentValue
        });
    };

    handleChatAdd = (chat) => {
        const { addChat, newChatIndex, linkTo } = this.props;

        const newChat = {
            id: newChatIndex,
            name: chat.name.value,
            avatarSrc: chat.avatarSrc.value
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
                    marked: chatsState[key].marked,
                    avatarSrc: chatsState[key].avatarSrc
                }
        }), {});

        deleteChat({ newState });

        linkTo('/');
    }

    // ProfileContainer
    handleForm = ({ name, description }) => {
        const { changeProfile, content } = this.props;
        const newData = {};
        newData.name = name ? name : this.props.profileName;
        newData.content = {
            ...content,
            description: description ? description : this.props.content.description
        }
        changeProfile({ ...newData });
    };

    render() {
        const {
            chats,
            messages,
            profileName,
            isLoading,
            isError
        } = this.props;

        // ProfileContainer
        const { content, isLoadingProfile, isErrorProfile } = this.props;

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
                markedChat = { this.handleMarkedChat }
                linkTo = { this.handleNavigate }

                // ProfileContainer
                content = { content }
                isLoadingProfile = { isLoadingProfile }
                isErrorProfile = { isErrorProfile }
                handleForm = { this.handleForm }
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
            marked: chats[key].marked,
            avatarSrc: chats[key].avatarSrc
        }
    ], []);

    const lastChatIndex = Object.keys(chats).length ? Object.keys(chats).length : 0;
    const newChatIndex = lastChatIndex + 1;

    const profileName = state.profile.entries.name;

    // ProfileContainer
    const { content } = state.profile.entries;


    const chatsState = chats;

    return {
        chatsState,
        chats: chatsArrayForShow,
        messages,
        chatIndex: match ? match.params.id : null,
        newChatIndex,
        profileName,
        isLoading: state.chats.loading,
        isError: state.chats.error,

        // ProfileContainer
        content,
        isLoadingProfile: state.profile.loading,
        isErrorProfile: state.profile.error
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsMessageSend(message)),
        addChat: (chat) => dispatch(chatsAdd(chat)),
        deleteChat: (newState) => dispatch(chatsDelete(newState)),
        linkTo: (path) => dispatch(push(path)),

        // ProfileContainer
        loadProfile: () => dispatch(profileLoad()),
        changeProfile: (data) => dispatch(profileChange(data))
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

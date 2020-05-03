import React, { Component } from 'react';
import className from 'classnames';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { MessageField } from 'components/MessageField';
import { MobileProfilePage } from 'components/Profile/MobileProfilePage';
import './Layout.css';

export class Layout extends Component {
    state = {
        showChats: false,
        showProfile: false,
        isMobile: false,
        onClickBody: false
    };

    componentDidMount() {
        if (document.documentElement.clientWidth <= 414) {
            this.setState({
                ...this.state,
                isMobile: true
            });
        }
    }

    showFunc = (event) => {
        if (event.chats !== undefined || event.profile !== undefined) {
            this.setState({
                showChats: event.chats ? true : false,
                showProfile: event.profile ? true : false,
                onClickBody: false
            });
        } else if (event.target
            && (event.target.closest('.message-field') || event.target.closest('.chat-item'))) {
            this.setState({
                showChats: false,
                showProfile: false,
                onClickBody: true
                // showChats: event.chats ? true : false,
                // showProfile: event.profile ? true : false,
                // onClickBody: true
            });
        }
    };

    render() {
        const {
            chats,
            messages,
            profileName,
            sendMessage,
            addChat,
            deleteChat,
            isLoading,
            isError,
            linkTo
        } = this.props;

        // ProfileContainer
        const { content, isLoadingProfile, isErrorProfile, handleForm } = this.props;

        const { showChats, showProfile } = this.state;

        if (isLoading) {
            return (
                <div>Loading...</div>
            );
        }
        if (isError) {
            return (
                <div>Try reloading the page. Server is not available...</div>
            );
        }

        return(
            <div className="layout">
                <Header
                    name = { profileName }
                    onClickBody = { this.state.onClickBody }
                    linkTo = { linkTo }
                    showFunc = { this.showFunc }
                />
                <div className="body" onClick = { this.showFunc }>
                    <div className = { className('container-chat-list', { 'modal-chat-list': showChats }) }>
                        <ChatList
                            chats = { chats }
                            addChat = { addChat }
                            deleteChat = { deleteChat }
                            linkTo = { linkTo }
                        />
                    </div>
                    <MessageField messages = { messages } sendMessage = { sendMessage } />
                </div>
                <div className = { className('container-profile-page', { 'modal-profile-page': showProfile }) }>
                    <MobileProfilePage
                        content = { content }
                        isLoading = { isLoadingProfile }
                        isError = { isErrorProfile }
                        handleForm = { handleForm }
                    />
                </div>
            </div>
        );
    }
}

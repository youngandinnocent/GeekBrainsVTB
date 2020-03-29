import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Layout} from 'components/Layout';
import {chatsLoad, chatsSend, chatsAdd} from 'actions/chats';

class LayoutContainer extends Component {
    componentDidMount() {
        const {loadChats} = this.props;
        loadChats();
    }

    componentDidUpdate() {
        if (this.props.match.path !== '/') {
            if (!this.props.messages.length) {
                return;
            }

            const {messages, chatId, sendMessage} = this.props;
            const {author} = messages[messages.length - 1];
            if (author !== 'bot') {
                setTimeout(() => {
                    if (this.props.messages[this.props.messages.length - 1].author !== 'bot') {
                        sendMessage({author: 'bot', text: 'Stop bothering me, Im a bot', chatId});
                    }
                },500)
            }
        }
    }

    handleMessageSend = (message) => {
        const {sendMessage, chatId} = this.props;
    
        sendMessage({
            ...message,
            chatId,
        });
    };

    handleChatAdd = (title) => {
        const {addChat, chatId} = this.props;

        addChat({
            ...title,
            chatId,
        })
    }

    render() {
        const {chats, messages} = this.props;
        return (<Layout
            chats={chats}
            messages={messages}
            sendMessage={this.handleMessageSend}
            addChat={this.handleChatAdd}
        />);
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({name: chats[key].name, messages: chats[key].messages, link: `/chats/${chats[key].id}`});
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()),
        sendMessage: (message) => dispatch(chatsSend(message)),
        addChat: (title) => dispatch(chatsAdd(title)),
    }
}

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
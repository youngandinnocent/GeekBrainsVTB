//отсюды вызываем actions
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Messanger } from 'components/Messanger';
import { chatsLoad, chatsSend } from 'actions/chats';

class MessangerContainer extends Component {
    
    componentDidMount() { //loadCHats попало в props
        const { loadChats} = this.props;
        loadChats();
    }

    handleMessageSend = (message) => {
        const { sendMessage, chatId } = this.props;
        //console.log(match.params.id)
        sendMessage({
            ...message,
            chatId
        });
        
    /// const chat = chats[match.params.id];
    /// console.log(chat)
    /// const messages = this.messages.concat([message]);
    /// chat.messages = messages;

    /// this.setState(() => {
    ///     return {
    ///             chats: [
    ///                 ...this.state.chats, //wrong need props
    ///             ]
    ///     }
    /// }
    /// 
    /// );
    }

    render() {
        const  {chats, messages} = this.props;
        return (
            <Messanger chats={chats} messages={messages} sendMessage={this.handleMessageSend} />
        );
    }
}

//автоматом передаем чаты и сообщения
function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries; //получаем чаты по ключу
    const { match } = ownProps;

    let messages = null;
    if(match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
    }

    //перебираем чаты
    let chatsArrayForShow = [];
    for(let key in chats) {
        if(chats.hasOwnProperty(key)) {
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${chats[key].id}`}); //просто выводим в компоненте
        }
    }

    //возвращаем то что попадает из props
    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id : null
    }
}

//передаем данные 
function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(chatsLoad()), //сигнал
        sendMessage: (message) => dispatch(chatsSend(message))
    }
}

export const MessangerRedux = connect(mapStateToProps, mapDispatchToProps)(MessangerContainer);
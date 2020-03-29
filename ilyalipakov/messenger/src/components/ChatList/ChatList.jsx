import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {List} from "@material-ui/core";
import ChatItem from "../ChatItem";
import {loadChats} from "../../actions/chatActions";

import './ChatList.css';
import ChatForm from "../Chat-form";

class ChatList extends Component {

  render() {
        const {chats} = this.props;
        const chatsUI = chats.map(({id, title}) => {
            return (
              <Link key={id} to={`/chats/${id}`}>
                  <ChatItem chatId={id} key={id} name={title} />
              </Link>
            )
        });

        return(
            <div className="app__chat-list chat-list">
                <List component="nav" aria-label="main mailbox folders">
                    {chatsUI}
                </List>
                <ChatForm chats={chats} />
            </div>
        );
    }
}


export default ChatList;
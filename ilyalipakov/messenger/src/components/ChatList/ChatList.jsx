import React, {Component} from "react";

import ChatItem from "../ChatItem";

import {List} from "@material-ui/core";

import './ChatList.css';

class ChatList extends Component {

    render() {
        return(
            <div className="app__chat-list chat-list">
                <List component="nav" aria-label="main mailbox folders">
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                </List>
            </div>
        );
    }

}

export default ChatList;
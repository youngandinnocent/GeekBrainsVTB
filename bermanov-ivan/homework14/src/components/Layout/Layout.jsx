import React, { Component } from 'react';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList'
import { MessageField } from 'components/MessageField';
import './Layout.css';

export class Layout extends Component {

    render() {
        return(
            <div className="layout">
                <Header />
                <div className="body">
                    <ChatList />
                    <MessageField />
                </div>
            </div>
        );
    }
}
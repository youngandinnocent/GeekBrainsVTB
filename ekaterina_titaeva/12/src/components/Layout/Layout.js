import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Header } from '../Header'
import { ChatList } from '../ChatList'
import { Chat } from '../Chat'

import './Layout.scss';

export class Layout extends Component {

    render() {

        return (
            <div>
                <Header />
                <div className='layout__flex-container'>
                    <ChatList />
                    <Chat />
                </div>
            </div>
        )
    }
};
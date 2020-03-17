import React, { Component } from 'react';
import './Messanger.css';
import SimpleList from '../ChatList/ChatList';
import SimpleMenu from '../Header/Header';
import { MessagePage } from '../MessagePage/MessagePage';

export class Messanger extends Component {


    render() {

        return (
            <div className='messanger'>
                <SimpleMenu />
                <div className='wrapper'>
                <SimpleList />
                <MessagePage />
                </div>
            </div>
        )
    }
}
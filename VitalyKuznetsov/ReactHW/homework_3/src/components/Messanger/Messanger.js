import React, { Component } from 'react';
import './Messanger.css';
import SimpleList from '../ChatList/ChatList';
import MenuAppBar from '../Header/Header';
import { MessagePage } from '../MessagePage/MessagePage';

export class Messanger extends Component {


    render() {

        return (
            <div className='messanger'>
            <MenuAppBar />
                <div className='wrapper'>
                <SimpleList />
                <MessagePage />
                </div>
            </div>
        )
    }
}
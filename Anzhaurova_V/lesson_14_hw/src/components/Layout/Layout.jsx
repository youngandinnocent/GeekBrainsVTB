import React, {Component} from 'react';
import './Layout.scss';

import {Messenger} from '../Messenger';
import {Header} from '../Header';
import {Chatlist} from '../Chatlist';


export class Layout extends Component {
    render() {
        return(
            <div className="layout">
                <Header />
                <div className="mess-container">
                    <Chatlist />
                    <Messenger />
                </div>
            </div>
        );
    };
}
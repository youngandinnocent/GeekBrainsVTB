import React, {Component} from "react";
import './Layout.css'

import {Header} from "../Header";
import {ChatList} from "../ChatList";
import {Messenger} from "../Messenger";

export class Layout extends Component {


    render() {
        return (
            <div className="layout">
                <Header />
                <div className="messenger-container">
                    <ChatList />
                    <Messenger />
                </div>
            </div>
        );
    };
}
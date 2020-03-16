import React, {Component} from 'react';
import Header from "../Header";
import ChatList from "../ChatList";
import Messenger from "../Messenger";

import './App.css';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app__wrapper">
                    <ChatList />
                    <Messenger/>
                </div>
            </div>
        );
    }

}

export default App;
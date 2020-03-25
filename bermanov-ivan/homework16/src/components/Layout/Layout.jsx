import React, { Component } from 'react';

import { Header } from 'components/Header';
// import { ChatList } from 'components/ChatList'
// import { MessageField } from 'components/MessageField';
import { MessangerRedux } from 'containers/MessangerContainer';
import './Layout.css';


export class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;
        return(
            <div className="layout">
                <Header />
                {/* <div className="body"> */}
                    {/* <ChatList /> */}
                {/* <MessageField match = { match }/> */}
                <MessangerRedux match = { match }/>
                {/* </div> */}
            </div>
        );
    }
}
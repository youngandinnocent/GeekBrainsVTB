import React, { Component } from 'react';

import { Header } from 'components/Header';
import { MessageField } from 'components/MessageField';
import './Layout.css';

export class Layout extends Component {

    render() {
        const { match } = this.props;
        
        return(
            <div className="layout">
                <Header />
                <MessageField match = { match }/>
            </div>
        );
    }
}

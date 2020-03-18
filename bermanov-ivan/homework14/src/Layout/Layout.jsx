import React, { Component } from 'react';

import { Messanger } from 'components/Messanger';


export class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="layout">
                <Messanger />
            </div>
        );
    }
}
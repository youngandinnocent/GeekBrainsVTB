import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessageField.css';

import {Message, messageType} from '../Message';

export class MessageField extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        )
    };

    render(){
        const {items} = this.props;

        return (
            <div className="message-field">
                {items.map((item, index) => <Message key={index} {...item} />)}
            </div>
        );
    }
}
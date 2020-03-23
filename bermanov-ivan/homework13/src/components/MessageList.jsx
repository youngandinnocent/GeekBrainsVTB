import React, { Component } from 'react';
import { Message } from 'components/Message';
import PropTypes from 'prop-types';

// Message.defaultProps = {
//     author: 'Author',
//     content: 'Message'
// };

export class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    // static defualtProps = {
    //     author: 'Author',
    //     content: 'Message'
    // };

    render() {
        console.log('list: ', this.props);
        const { messages } = this.props;
        return (
            <div>
                { messages.map((message, index) => <Message {...message} key = { index } />) }
            </div>
        );

        // пробую от листа, как от родителя, пробросить пропсы, но вообще получается ерунда - получаю дублированное сообщение от автора
        // return (
        //     <div>
        //         { messages.map((message, index) => <Message {...message} key = { index } author = { this.props.author } content = { this.props.content } />) }
        //     </div>
        // );  
    }
}

// Props 2.1 MessageList - получает пропс (массив сообщений) от Messanger
// { messages.map((message, index) => <Message {...message} key = { index } />) } - мапим список сообщений, после чего каждому сообщению передаем пропс message и key
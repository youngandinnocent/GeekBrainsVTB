//message -  компонент самого сообщения

import React, {Component} from 'react';
import PropTypes from 'prop-types'; //propTypes чтобы описать те параметры которые у нас приходят
import './Message.scss';
import classNames from 'classnames';

export const messageType = {
    author: PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
}

export class Message extends Component {
    static propTypes

    // get direction(){
    //     return this.props.author === 'Bot'?'start':'end';
    // }
    render() {
        //возвращаем JSX код
        const {author,text} = this.props;
        const classes = classNames('message', {
            'message-owner': author !== 'Bot',
            'message-bot': author === 'Bot',

        })
        return (
            <div className={classes}>
                <div>{text}</div>
                <div className="message-sender">{author}</div>
            </div>

        )
      }
}





// return (
//     <div className="message" style={{alignSelf: `flex-${this.direction}`}}>
//         {author}: {text}
//     </div>
//     )
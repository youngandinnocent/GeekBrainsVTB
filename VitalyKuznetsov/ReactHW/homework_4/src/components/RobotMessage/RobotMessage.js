import React, { Component } from 'react';

import './RobotMessage.css';

export default class RobotMessage extends Component {
    state = {
        author: 'bot',
        text: null
    }

    randomAswer = () => {
        const phrases = ['Hello', 'How are u?', 'Hey, I am a robot'];
        for (let i = 0; i < phrases.length; i++) {
            let newPhrase = Math.floor(Math.random() * phrases.length);
            this.setState(() => {
                return {
                    author: 'bot',
                    text: newPhrase
                }
            })
        }
    }

    render() {
        return (
            <div>


            </div>
        )
    }
}

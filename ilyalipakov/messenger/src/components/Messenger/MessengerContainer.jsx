import React, {Component, useState} from 'react';
import { connect } from 'react-redux';

import Messenger from "./Messenger.jsx";

import {sendMessage} from "../../actions/chatActions";
import {answerRobot} from "../../helpers/robot";

class MessengerContainer extends Component {

  componentDidUpdate() {
    if (!this.props.messages.length) {
      return;
    }

    if (this.props.messages[this.props.messages.length - 1].author !=='Robot' &&
      this.state.author === '' &&
      this.state.message === '') {
      this.answerRobot();
    }
  }

  state = {
    message: '',
    author: '',
    isClick: true
  };

  handleChange = () => (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  };

  handleSendMessage = (message, author) => () => {
    const {chatId, sendMessage} = this.props;

    if (message === '' || author === '') {
      return
    }

    if (!this.state.isClick) {
      return;
    }

    sendMessage({chatId, author, message});

    this.setState({
      author: '',
      message: '',
      isClick: false
    });
  };

  answerRobot = () => {
    const {chatId, sendMessage} = this.props;
    setTimeout(() => {
      sendMessage({chatId, author: 'Robot', message: answerRobot()});
      this.setState({
        isClick: true
      });
    },1000);
  };

  render() {
    const {message, author} = this.state;
    const {messages} = this.props;

    return <Messenger
      messages={messages}
      message={message}
      author={author}
      handleSendMessage={this.handleSendMessage}
      handleChange={this.handleChange} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (payload) => dispatch(sendMessage(payload)),
  }
};

export default connect(null, mapDispatchToProps)(MessengerContainer);
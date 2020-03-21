import React, {Component} from 'react';
import {connect} from 'react-redux';

import App from "./App.jsx";

import {loadChats, setCurrentChat} from "../../actions/chatActions.js";

import './App.css';

class AppContainer extends Component {

  componentDidMount() {
    setTimeout(() => {
      const { chatId } = this.props;
      this.props.loadChats();
      this.props.setCurrentChat({chatId});
    }, 500);
  }

  render() {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const chats = state.chats.entries;
  const loading = state.chats.loading;
  const { match } = ownProps;
  const chatId = match.params.id;
  let messages = chats[chatId] ? chats[chatId].messages : null;

  let chatsArrayForShow = [];

  for (let key in chats) {
    if (chats.hasOwnProperty(key)) {
      chatsArrayForShow.push({...chats[key]});
    }
  }

  return {
    chats: chatsArrayForShow,
    messages,
    chatId,
    loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadChats: () => dispatch(loadChats()),
    setCurrentChat: (id) => dispatch(setCurrentChat(id))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
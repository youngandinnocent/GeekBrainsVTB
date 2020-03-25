import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from "@material-ui/core";

import {addChat} from "../../actions/chatActions.js";

import './Chat-form.css';

class ChatForm extends Component {

  state = {
    name: ''
  };

  handleChange = () => (e) => {
    const name = e.target.value;
    this.setState({
      name
    });
  };

  handleAddChat = () => () => {
    const {addChat, chats} = this.props;
    const {name} = this.state;
    const id = !chats.length ? 1 : chats[chats.length - 1].id + 1;

    addChat(id, name);
    this.setState({
      name: ''
    });
  };

  render() {
    return (
      <div className="chat-form">
        <input
          onChange={this.handleChange()}
          value={this.state.name}
          type="text"
          className="chat-form__field"
          placeholder="Новый чат" />
        <Button
                onClick={this.handleAddChat()}
                className="chat-from__btn"
                variant="contained"
                color="secondary"
                size="small">+</Button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addChat: (id, name) => dispatch(addChat(id, name))
  };
};

export default connect(null, mapDispatchToProps)(ChatForm);

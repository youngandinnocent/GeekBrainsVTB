import React from 'react';
import {connect} from 'react-redux';

import { Messages } from '../components/Messages';


const MessagesContainer = ({ messages }) =>
    <Messages messages={messages}/>


const mapStateToProps = (store) => ({
    messages: store.messages
});

export default connect(mapStateToProps)(MessagesContainer)
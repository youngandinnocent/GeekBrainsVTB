import React from 'react';
import {connect} from 'react-redux';

import { Layout } from '../components/Layout';
import { updateCurrentChatID } from '../store/actions/actionCreators';


const LayoutContainer = ({ match, updateCurrentChatID }) => {
    return <>
        <Layout match={match} updateCurrentChatID={(chatID) => updateCurrentChatID(chatID)}/>
    </>
}


const mapDispatchToProps = (dispatch) => ({
    updateCurrentChatID: (chatID) => dispatch(updateCurrentChatID(chatID))
});

export default connect(
    null,
    mapDispatchToProps
)(LayoutContainer)
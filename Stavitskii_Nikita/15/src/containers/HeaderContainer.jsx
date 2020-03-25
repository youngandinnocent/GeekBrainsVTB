import React, {Component} from "react";
import {connect} from 'react-redux';
import {profileLoad} from 'actions/profile';

import {Header} from 'components/Header'

class HeaderContainer extends Component {
    componentDidMount() {
        const {loadProfile} = this.props;
        loadProfile();
    }

    render() {
        const {name} = this.props;
        return (
            <Header profileName={name} />
        )
    }
}

function mapStateToProps(state) {
    const name = state.profile.entries[1] ? state.profile.entries[1].name : '';
    return {name};
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfile: () => dispatch(profileLoad())
    }
}

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
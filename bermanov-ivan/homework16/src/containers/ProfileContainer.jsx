import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProfilePage } from 'pages/ProfilePage';
import { profileLoad, profileChange } from 'actions/profile';

export class ProfileContainer extends Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    // не понимаю, почему здесь получается ReferenceError: changeProfile is not defined ?
    handleForm = (newName) => {
        changeProfile({ ...newName });
    };

    render() {
        const { name, content } = this.props;

        return (
            <ProfilePage name = { name } content = { content } handleForm = { this.handleForm } />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const name = state.name;
    console.log(ownProps);
    // const { match } = ownProps;

    return { name };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfile: () => dispatch(profileLoad()),
        changeProfile: (name) => dispatch(profileChange(name))
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

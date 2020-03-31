import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProfilePage } from 'pages/ProfilePage';
import { profileLoad, profileChange } from 'actions/profile';

export class ProfileContainer extends Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    handleForm = ({ name, content }) => {
        const { changeProfile } = this.props;
        const newData = {};
        newData.name = name ? name : this.props.name;
        newData.content = content ? content : this.props.content;
        changeProfile({ ...newData });
    };

    render() {
        const { name, content } = this.props;

        return (
            <ProfilePage name = { name } content = { content } handleForm = { this.handleForm } />
        );
    }
}

function mapStateToProps(state) {
    const name = state.profile.entries.name;
    const content = state.profile.entries.content;

    return { name, content };
}

function mapDispatchToProps(dispatch) {

    return {
        loadProfile: () => dispatch(profileLoad()),
        changeProfile: (name) => dispatch(profileChange(name))
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

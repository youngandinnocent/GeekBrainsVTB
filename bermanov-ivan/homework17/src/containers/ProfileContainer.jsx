import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ProfilePage } from 'components/Profile';
import { profileLoad, profileChange } from 'actions/profile';

export class ProfileContainer extends Component {

    componentDidMount() {
        const { loadProfile, name } = this.props;
        if (!name) {
            loadProfile();
        }
    }

    handleNavigate = (link) => {
        const { linkTo } = this.props;
        linkTo(link);
    };

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
            <ProfilePage
                name = { name }
                content = { content }
                handleForm = { this.handleForm }
                linkTo = { this.handleNavigate }
            />
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
        changeProfile: (data) => dispatch(profileChange(data)),
        linkTo: (path) => dispatch(push(path))
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

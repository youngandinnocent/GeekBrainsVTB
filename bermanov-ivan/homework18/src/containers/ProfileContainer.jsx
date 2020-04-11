import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ProfilePage, contentTypes } from 'components/Profile';
import { profileLoad, profileChange } from 'actions/profile';

export class ProfileContainer extends Component {

    static propTypes = {
        loadProfile: PropTypes.func.isRequired,
        changeProfile: PropTypes.func.isRequired,
        linkTo: PropTypes.func.isRequired,

        name: PropTypes.string,
        content: PropTypes.shape(contentTypes),
        isLoading: PropTypes.bool.isRequired,
        isError: PropTypes.bool
      };

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

    handleForm = ({ name, description }) => {
        const { changeProfile, content } = this.props;
        const newData = {};
        newData.name = name ? name : this.props.name;
        newData.content = {
            ...content,
            description: description ? description : this.props.content.description
        }
        changeProfile({ ...newData });
    };

    render() {
        const { name, content, isLoading, isError } = this.props;

        return (
            <ProfilePage
                name = { name }
                content = { content }
                isLoading = { isLoading }
                isError = { isError }
                handleForm = { this.handleForm }
                linkTo = { this.handleNavigate }
            />
        );
    }
}

function mapStateToProps(state) {
    const { name } = state.profile.entries;
    const { content } = state.profile.entries;

    return {
        name,
        content,
        isLoading: state.profile.loading,
        isError: state.profile.error
    };
}

function mapDispatchToProps(dispatch) {

    return {
        loadProfile: () => dispatch(profileLoad()),
        changeProfile: (data) => dispatch(profileChange(data)),
        linkTo: (path) => dispatch(push(path))
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

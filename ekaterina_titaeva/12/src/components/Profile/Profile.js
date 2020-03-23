import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileLoad } from '../../actions/profile';

class Profile extends Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    render() {
        const { name } = this.props;
        return (
            <div>Вы пользуетесь приложением {name}. Спасибо, что выбираете нас!</div>
        )
    }
}

function mapStateToProps(state) {
    const { name } = state.profile;
    return {
        name: name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfile: () => (dispatch(profileLoad()))
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(Profile);
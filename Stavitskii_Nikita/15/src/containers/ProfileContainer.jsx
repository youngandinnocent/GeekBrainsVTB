import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Profile} from 'pages/Profile';
import {profileLoad} from 'actions/profile';

class ProfileContainer extends Component {
    componentDidMount() {
        const {loadProfile} = this.props;
        loadProfile();
    }

    render() {
        const {profiles} = this.props;
        return <Profile profiles={profiles} />
    }
}

function mapStateToProps(state, ownProps) {
    const profiles = state.profile.entries;
    //const {match} = ownProps;

    let profilesArrayForShow = [];
    for(let key in profiles){
        if(profiles.hasOwnProperty(key)){
            profilesArrayForShow.push({name: profiles[key].name, lastname: profiles[key].lastname, age: profiles[key].age});
        }
    }
    return {
        profiles: profilesArrayForShow,
    }
}

function mapDispatchToProps(dispatch) {
    return {loadProfile: () => dispatch(profileLoad())}
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
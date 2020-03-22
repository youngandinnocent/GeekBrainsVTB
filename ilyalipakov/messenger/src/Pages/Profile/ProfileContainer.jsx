import React, {Component} from "react";
import {connect} from 'react-redux';

import {loadProfiles} from "../../actions/profileActions.js";

import Spinner from "../../components/Spinner";
import Profile from "./Profile.jsx";

class ProfileContainer extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.loadProfiles()
    }, 1000);
  }

  render() {
    const {loading} = this.props;
    return loading ? <Spinner /> : <Profile {...this.props}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const profiles = state.profiles.entries;
  const loading = state.profiles.loading;
  const { id } = ownProps.match.params;
  const profile = profiles[id];

  return {
    ...profile,
    loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProfiles: () => dispatch(loadProfiles())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
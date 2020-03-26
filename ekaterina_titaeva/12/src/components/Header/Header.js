import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { profileLoad } from '../../actions/profile';

import './Header.scss';

class Header extends Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    handleNavigate = (link) => {
        this.props.redirect(link);
    };

    render() {
        const { name } = this.props;
        return (
            <div className="header" onClick={() => this.handleNavigate('/profile')}>
                {name}
            </div>
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
        loadProfile: () => dispatch(profileLoad()),
        redirect: (link) => dispatch(push(link))
    }
}

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(Header);
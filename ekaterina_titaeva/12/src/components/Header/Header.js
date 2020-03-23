import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileLoad } from '../../actions/profile';

import './Header.scss';

class Header extends Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    render() {
        const { name } = this.props;
        return (
            <div className="header">
                <Link to='/profile'>
                    {name}
                </Link>
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
        loadProfile: () => dispatch(profileLoad())
    }
}

export const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(Header);
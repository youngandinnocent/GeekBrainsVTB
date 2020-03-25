import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileLoad, profileLoad2 } from '../../actions/profile';

class Profile extends Component {

    componentDidMount() {
        const { loadProfile } = this.props;
        loadProfile();
    }

    render() {
        const { name, lastName, age, progrLang, isLoading, isError } = this.props;
        console.log('JJJJJJ', this.props)

        if (isLoading) {
            return (<div>Loading...</div>);
        }

        if (isError) {
            return (<div>Попробуйте обновить страницу, сервис временно недоступен.</div>);
        }

        return (
            <>
                <div>Имя: {name}</div>
                <div>Фамилия: {lastName}</div>
                <div>Возраст: {age}</div>
                <div>Языки программирования:
                {progrLang && progrLang.map((elem, index) => <span key={index}>{elem} </span>)}
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    const { name, lastName, age, progrLang } = state.profile.entries;
    const { loading, error } = state.profile;
    console.log('mapStateToProps', state)
    return {
        name,
        lastName,
        age,
        progrLang,
        isLoading: loading,
        isError: error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProfile: () => (dispatch(profileLoad2()))
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(Profile);
import React from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/session';
import Login from './login';

const mSTP = state => {
    return {
        errors: state.errors
    };
};

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser))
});


export default connect(mSTP, mDTP)(Login);
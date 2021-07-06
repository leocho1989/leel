import React from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/session';
import Login from './login';

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

const mSTP = (state) => ({ missing: state.session.missing });

export default connect(mSTP, mDTP)(Login);
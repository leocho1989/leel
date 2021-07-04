import react from 'react';
import { connect} from 'react-redux';
import NavBar from './nav_bar';
import {logout} from '../../actions/session';

const mSTP = state => ({
    currentUser:state.session.currentUser,
    session:state.session,
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
    
});

export default connect(mSTP, mDTP)(NavBar);
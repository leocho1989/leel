import {connect} from 'react-redux';
import {createNewUser,login} from '../../actions/session';
import Signup from './signup';

const mSTP = state => {
    return {
        errors: state.errors,
        currentUser: state.session.currentUser
    };
};

const mDTP = dispatch=>({
    createNewUser: formUser=>dispatch(createNewUser(formUser)),
    login: formUser => dispatch(login(formUser))
});

export default connect(mSTP, mDTP)(Signup);

import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session';
import Signup from './signup';

const mSTP = state => {
    return {
        errors: state.errors
    };
};

const mDTP = dispatch=>({
    createNewUser: formUser=>dispatch(createNewUser(formUser))
});

export default connect(mSTP, mDTP)(Signup);

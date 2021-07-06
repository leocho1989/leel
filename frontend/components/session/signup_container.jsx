import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session';
import Signup from './signup';

const mDTP = dispatch=>({
    createNewUser: formUser=>dispatch(createNewUser(formUser))
});
const mSTP = (state) => ({ missing: state.session.missing });
export default connect(mSTP, mDTP)(Signup);

import React from 'react';
import LeelIndex from './leel_index';
import {fetchLeels, fetchLeel, createLeel, updateLeel, deleteLeel } from '../../actions/leels';
import {fetchUsers, fetchUser} from '../../actions/users';

import { connect } from 'react-redux';


const mSTP = (state, ownProps) => ({
    leels:Object.keys(state.leels).map(key => state.leels[key]),
    leel:state.leels[ownProps.match.params.id]
});

const mDTP = dispatch => (dispatch)=>({
    fetchLeels:() => dispatch(fetchLeels()),
    fetchLeel:(id) => dispatch(fetchLeel(id)),
    createLeel:(leel) => dispatch(createLeel(leel)),
    updateLeel:(leel) => dispatch(updateLeel(leel)),
    deleteLeel:(leel) => dispatch(deleteLeel(leel)),
  
    fetchUsers:() => dispatch(fetchUsers()),
    fetchUser:(id) => dispatch(fetchUser(id))
});

export default connect(mSTP, mDTP)(LeelIndex);
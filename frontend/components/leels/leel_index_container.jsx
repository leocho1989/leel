import React from 'react';
import LeelIndex from './leel_index';
import {fetchLeels, fetchLeel, createLeel, updateLeel, deleteLeel, likeLeel, unLikeLeel} from '../../actions/leels';
import { connect } from 'react-redux';


const mSTP = state => ({
    leels:Object.keys(state.leels).map(key => state.leels[key])
});

const mDTP = dispatch => (dispatch)=>({
    fetchLeels:() => dispatch(fetchLeels()),
    fetchLeel:(id) => dispatch(fetchLeel(id)),
    createLeel:(leel) => dispatch(createLeel(leel)),
    updateLeel:(leel) => dispatch(updateLeel(leel)),
    deleteLeel:(leel) => dispatch(deleteLeel(leel)),
    likeLeel:(id) => dispatch(likeLeel(id)),
    unLikeLeel:(id) => dispatch(unLikeLeel(id))
});

export default connect(mSTP, mDTP)(LeelIndex);
import React from 'react';
import LeelIndex from './leel_index';
import {fetchLeels, likeLeel, unLikeLeel} from '../../actions/leels';
import { connect } from 'react-redux';


const mSTP = state => ({
    leels:Object.keys(state.leels).map(key => state.leels[key])
});

const mDTP = dispatch => (dispatch)=>({
    fetchLeels:() => dispatch(fetchLeels()),
    likeLeel:(id) => dispatch(likeLeel(id)),
    unLikeLeel:(id) => dispatch(unLikeLeel(id))
});

export default connect(mSTP, mDTP)(LeelIndex);
export const RECEIVE_LEEL = "RECEIVE_LEEL";
export const RECEIVE_LEELS = "RECEIVE_LEELS";
export const REMOVE_LEEL = "REMOVE_LEEL";
export const LEEL_ERROR = "LEEL_ERROR";

import * as LeelAPIUtil from "../util/leels";
import {receiveError, clearError} from "./error";
import {fetchUsers} from './users';


export const receiveLeels = leels => ({
    type: RECEIVE_LEELS,
    leels
});

export const receiveLeel = leel =>({
    type: RECEIVE_LEEL,
    leel
});

export const removeLeel = leel => ({
    type: REMOVE_LEEL,
    leel
});

export const leelError = error => ({
    type: LEEL_ERROR,
    error

});


export const fetchLeels =()=>dispatch=>(
    LeelAPIUtil.getLeels()
    .then(leels => dispatch(receiveLeels(leels)))  
);

export const fetchLeel = id => dispatch => (
     LeelAPIUtil.getLeel(id).then(leel => dispatch(receiveLeel(leel)))
);
    
export const createLeel = leel => dispatch => (            LeelAPIUtil.createLeel(leel)
    .then(leel => {dispatch(receiveLeel(leel)); dispatch(clearError()); dispatch(fetchLeels());}, error => dispatch(receiveError(error.responseJSON)))
);

export const photoLeel = leel => dispatch => (            LeelAPIUtil.photoLeel(leel)
    .then(leel => {dispatch(receiveLeel(leel)); dispatch(clearError()); dispatch(fetchLeels());}, error => dispatch(receiveError(error.responseJSON)))
);

export const updateLeel = leel => dispatch => (
    LeelAPIUtil.updateLeel(leel).then(leel => {dispatch(receiveLeel(leel)); dispatch(clearError()); dispatch(fetchLeels());})
);

export const updateLeelPhoto = leel => dispatch => (
    LeelAPIUtil.updateLeelPhoto(leel).then(leel => {dispatch(receiveLeel(leel)); dispatch(clearError()); dispatch(fetchLeels());})
);

export const deleteLeel = leel => dispatch => (
    LeelAPIUtil.deleteLeel(leel).then(leel=> {dispatch(removeLeel(leel));dispatch(fetchLeels());})
);


export const likeLeel= id=>dispatch=>(
    LeelAPIUtil.postLikeToLeel(id)
    .then(leel => dispatch(fetchLeels()))
);

export const unLikeLeel= id=>dispatch=>(
     LeelAPIUtil.deleteLikeFromLeel(id)
    .then(leel => dispatch(fetchLeels()))
);


export const followLeeler= id=>dispatch=>(
    LeelAPIUtil.postFollowToLeeler(id)
    .then(leel => {dispatch(fetchLeels()); dispatch(fetchUsers());})
);

export const unFollowLeeler= id=>dispatch=>(
     LeelAPIUtil.deleteFollowFromLeeler(id)
     .then(leel => {dispatch(fetchLeels()); dispatch(fetchUsers());})
);
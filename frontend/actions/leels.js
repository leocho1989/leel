export const RECEIVE_LEEL = "RECEIVE_LEEL";
export const RECEIVE_LEELS = "RECEIVE_LEELS";
import {getLeels, postLikeToLeel, deleteLikeFromLeel} from "../util/leels";


const receiveLeels = leels => ({
    type: RECEIVE_LEELS,
    leels
});

const receiveLeel = leel =>({
    type: RECEIVE_LEEL,
    leel
});

export const fetchLeels =()=>dispatch=>{
    return getLeels()
    .then(leels => dispatch(receiveLeels(leels)));
    
};

export const likeLeel= id=>dispatch=>{
    return postLikeToLeel(id)
    .then(leel => dispatch(receiveLeel(leel)));
};

export const unLikeLeel= id=>dispatch=>{
    return deleteLikeFromLeel(id)
    .then(leel => dispatch(receiveLeel(leel)));
};
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const receiveError = errors =>({

    type: RECEIVE_ERROR,
    errors
});

export const clearError = ()=>({ 
    type:CLEAR_ERROR
});
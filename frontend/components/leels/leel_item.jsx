import React from 'react';

export default ({ leel, likeLeel, unLikeLeel}) =>{
    let likeButtonText ="Unlike it";
    let likeButtonAction = ()=>likeLeel(leel.id);
    if (leel.liked_by_current_user) {
        likeButtonText  = "Like it";
        likeButtonAction = () =>unLikeLeel(leel.id);
    }

    return (
        <li>
            <h3>{leel.body}</h3>
            <p><strong>Likes:{leel.likes}</strong></p>
            <button onClick={likeButtonAction}>{likeButtonText}</button>
        </li>
    )
    
}
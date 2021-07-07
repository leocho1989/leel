import React from 'react';

export default ({ leel, likeLeel, unLikeLeel}) =>{
    let likeButtonText ="Unlike it";
    let likeButtonAction = ()=>likeLeel(leel.id);
    if (leel.liked_by_current_user) {
        likeButtonText  = "Like it";
        likeButtonAction = () =>unLikeLeel(leel.id);
    }

    return (
        <li className="leels">
            <div className="post">
            <p className="author">Authour:{leel.author_username}</p>
            <h3 className="body_post" >{leel.body}</h3>
            <p className="like_count"><strong>Likes:{leel.likes}</strong></p>
            <button className="like_button" onClick={likeButtonAction}>{likeButtonText}</button>
            </div>
        </li>
    )
    
}
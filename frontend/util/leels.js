export const getLeels = ()=>$.ajax({
    url: "/api/leel_posts"
});

export const postLikeToLeel = id => $.ajax({
    url: "/api/likes",
    method: "POST",
    data: {id: id},
    
});

export const deleteLikeFromLeel = id => $.ajax({

    url: "/api/likes",
    method: "DELETE",
    data: {id:id}
});
export const getLeels = ()=>$.ajax({
    url: "/api/leel_posts"
});

export const getLeel = (id)=>$.ajax({
    url: `/api/leel_posts/${id}`
});

export const createLeel = (leel)=>$.ajax({
    url: "/api/leel_posts",
    method: "POST",
    data: leel
});

export const updateLeel = (leel)=>$.ajax({
    method:'PATCH',
    url: `/api/leel_posts/${leel.id}`,
    data: leel
     });
    

    
export const deleteLeel =leel=>$.ajax({
    method:'DELETE',
    url: `/api/leel_posts/${leel.id}`

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
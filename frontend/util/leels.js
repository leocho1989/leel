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

export const photoLeel = (leel)=>$.ajax({
    url: "/api/leel_posts",
    method: "POST",
    data: leel,
    contentType:false,
    processData:false
});

export const updateLeel = leel=>$.ajax({
    method:'PATCH',
    url: `/api/leel_posts/${leel.id}`,
    data: leel
     });

  export const updateLeelPhoto = (formData)=>$.ajax({
    method: "PATCH",
    url: `/api/leel_posts/${formData.get('id')}`,
    data: formData,
    contentType:false,
    processData:false   
    
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


export const postFollowToLeeler = id => $.ajax({
    url: "/api/follows",
    method: "POST",
    data: {id: id},
    
});

export const deleteFollowFromLeeler = id => $.ajax({

    url: `/api/follows/${user.id}`,
    method: "DELETE",
    data: {id:id}
});
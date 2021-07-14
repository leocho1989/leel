# json.extract! @leels, :id, :body, :author_id
# json.likes @leels.likes.count
# json.liked_by_current_user !!@leels.likes.find_by(user_id: current_user.id)

json.array!(@leels) do |_leel|
  json.id _leel.id
  json.author_username _leel.author.username
  json.author_id _leel.author.id
  json.body _leel.body
  json.title _leel.title
  json.likes _leel.likes.count
  json.photoUrls _leel.photos.map {|photo| url_for(photo) } if _leel.photos.attached?
  json.liked_by_current_user !!_leel.likes.find_by(user_id: current_user.id)
  # json.followers _leel.followers.count  
  # json.followed_by_current_user !!_leel.follow.find_by(user_id: current_user.id)
  
  

end

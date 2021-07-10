json.array!(@leels) do |_leel|

  json.liked_by_current_user !!_leel.likes.find_by(user_id: current_user.id)
  

end
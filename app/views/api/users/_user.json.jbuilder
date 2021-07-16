json.array!(@users) do |_user|
    json.id _user.id
    json.username _user.username
    # json.email _user.email
    json.avatar url_for(_user.avatar) if _user.avatar.attached?
    json.followers _user.following_users.count 
    json.followed_by_current_user !!_user.following_users.find_by(follower_id: current_user.id)
end
json.array!(@users) do |_user|

    json.followed_by_current_user !!_user.followed_users.find_by(follower_id: current_user.id)
end
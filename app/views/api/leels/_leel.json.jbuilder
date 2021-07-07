json.extract! leel, :id, :body, :author_id
json.likes leel.likes.count
json.liked_by_current_user !!leel.likes.find_by(user_id: current_user.id)
# json.extract! @leels, :id, :body, :author_id
# json.likes @leels.likes.count
# json.liked_by_current_user !!@leels.likes.find_by(user_id: current_user.id)

json.array!(@leels) do |_leel|
  json.id _leel.id
  json.author_username _leel.author.username
  json.body _leel.body
end
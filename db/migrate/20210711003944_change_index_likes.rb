class ChangeIndexLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index "likes", column: [:user_id], name: "index_likes_on_user_id"
  end
end

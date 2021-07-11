class ChangeIndexLeelLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index "likes", column: [:leel_id], name: "index_likes_on_leel_id"
  end
end

class ChangeUniquenessLikes < ActiveRecord::Migration[5.2]
  def change
    change_column :likes, :user_id, :integer, unique: false
  end
end

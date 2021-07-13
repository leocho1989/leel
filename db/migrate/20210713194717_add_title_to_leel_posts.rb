class AddTitleToLeelPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :leel_posts, :title, :string
     
  end
end

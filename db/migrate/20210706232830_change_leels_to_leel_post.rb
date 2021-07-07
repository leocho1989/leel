class ChangeLeelsToLeelPost < ActiveRecord::Migration[5.2]
  def change
    rename_table :leels, :leel_posts
  end
end

class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :leel_id, null: false
      t.timestamps
    end
    add_index :likes, :user_id, unique: true
    add_index :likes, :leel_id, unique: true
  end
end

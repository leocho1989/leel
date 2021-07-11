class Like < ApplicationRecord
    validates :user_id, presence: true, uniqueness: false
    validates :leel_id, presence: true

    belongs_to :leel_post,
    primary_key: :id,
    foreign_key: :leel_id,
    class_name: 'LeelPost'

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
    
    
end

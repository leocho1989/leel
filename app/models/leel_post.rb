class LeelPost < ApplicationRecord
    validates :body, presence: true, length: { maximum: 240 }
    # validate :ensure_photo

    has_many :likes,
        primary_key: :id,
        foreign_key: :leel_id,
        class_name: 'Like'

    has_many :likers,
        through: :likes,
        source: :user

        belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User'

    has_many_attached :photos

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "Photo must be attached"
        end
    
    end

end
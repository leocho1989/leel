class LeelPost < ApplicationRecord
    validates :body, presence: true, length: { maximum: 240, allow_nil: true }
    # validate :ensure_photos

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

    def ensure_photos
        unless self.photos.attached?
            errors[:photos] << "Photo must be attached"
        end
    
    end

end
class User < ApplicationRecord
    attr_reader :password

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true, length: {minimum: 6}, allow_nil: true
    validates :session_token, presence: true

    after_initialize :ensure_session_token

    has_many :leels,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Leel'

    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Like"

    has_many :liked_leels,
    through: :likes,
    source: :leel

    def self.find_by_credentials(username, password)
        user= User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end
        
    def password=(password)
        @password=password
         self.password_digest=BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||=SecureRandom.urlsafe_base64
         
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
        
end

class Follow < ApplicationRecord

    belongs_to :person_doing_the_following,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :person_being_followed,
    primary_key: :id,
    foreign_key: :followee_id,
        class_name: :User

end
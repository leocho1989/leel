# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
LeelPost.destroy_all
Like.destroy_all

user1 = User.create(username: "Andree Yundt", email: "lucy_kling@leffler.net", password: '12345678')
user2 = User.create(username: "Jeane Abernathy", email: "suzi@abernathy-ebert.org", password: '12345678')
user3 = User.create(username: "Chanell Rau", email: "chu@funk-walsh.org", password: '12345678')
user4 = User.create(username: "Marybeth Carter Esq", email: "kristina.rogahn@goodwin.info", password: '12345678')
user5 = User.create(username: "Cora Lindgren", email: "lan@cronin.io", password: '12345678')
user6 = User.create(username: "test", email: "test@google.com", password: 'testtest')

leel1 = LeelPost.create(body: "Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy.", author_id: user1.id)
leel2 = LeelPost.create(body: "Today is a pretty good day.", author_id: user2.id)
leel3 = LeelPost.create(body: "Harry, suffering like this proves you are still a man! This pain is part of being human...the fact that you can feel pain like this is your greatest strength.", author_id: user3.id)
leel4 = LeelPost.create(body: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?", author_id: user4.id)
leel5 = LeelPost.create(body: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.", author_id: user5.id)
leel6 = LeelPost.create(body: "You sort of start thinking anything’s possible if you’ve got enough nerve.", author_id: user6.id)

Like.create(user_id: user3.id, leel_id: leel1.id)
Like.create(user_id: user4.id, leel_id: leel2.id)
Like.create(user_id: user5.id, leel_id: leel3.id)

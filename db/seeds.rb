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

user101 = User.create(username: "Andree Yundt", email: "lucy_kling@leffler.net", password: '12345678')
user102 = User.create(username: "Jeane Abernathy", email: "suzi@abernathy-ebert.org", password: '12345678')
user103 = User.create(username: "Chanell Rau", email: "chu@funk-walsh.org", password: '12345678')
user104 = User.create(username: "Marybeth Carter Esq", email: "kristina.rogahn@goodwin.info", password: '12345678')
user105 = User.create(username: "Cora Lindgren", email: "lan@cronin.io", password: '12345678')
user106 = User.create(username: "test", email: "test@google.com", password: 'testtest')

leel101 = LeelPost.create(body: "Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy.", author_id: "1")
leel101 = LeelPost.create(body: "Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy.", author_id: "1")
leel101 = LeelPost.create(body: "Harry, suffering like this proves you are still a man! This pain is part of being human...the fact that you can feel pain like this is your greatest strength.", author_id: "2")
leel102 = LeelPost.create(body: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?", author_id: "2")
leel103 = LeelPost.create(body: "Things we lose have a way of coming back to us in the end, if not always in the way we expect.", author_id: "3")
leel104 = LeelPost.create(body: "You sort of start thinking anything’s possible if you’ve got enough nerve.", author_id: "4")

Like.create(user_id: user103.id, leel_id: leel101.id)
Like.create(user_id: user104.id, leel_id: leel102.id)
Like.create(user_id: user105.id, leel_id: leel103.id)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

User.destroy_all
LeelPost.destroy_all
Like.destroy_all

user101 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: '12345678')
user102 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: '12345678')
user103 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: '12345678')
user104 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: '12345678')
user105 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: '12345678')
user106 = User.create(username: "test", email: Faker::Internet.email, password: 'testtest')

leel101 = LeelPost.create(body: Faker::Movies::HarryPotter.quote, author_id: user101.id)
leel101 = LeelPost.create(body: Faker::Movies::HarryPotter.quote, author_id: user101.id)
leel101 = LeelPost.create(body: Faker::Movies::HarryPotter.quote, author_id: user101.id)
leel102 = LeelPost.create(body: Faker::Movies::HarryPotter.quote, author_id: user102.id)
leel103 = LeelPost.create(body: Faker::Movies::HarryPotter.quote, author_id: user103.id)
leel104 = LeelPost.create(body: Faker::Movies::HarryPotter.quote, author_id: user104.id)

Like.create(user_id: user103.id, leel_id: leel101.id)
Like.create(user_id: user104.id, leel_id: leel102.id)
Like.create(user_id: user105.id, leel_id: leel103.id)

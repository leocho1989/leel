# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





require 'open-uri'

demo_user = User.create(username: "demouser", email: "demouser@email.com", password: "password")

file = open('https://app-leel-pro.s3.us-west-1.amazonaws.com/blogger.png')

demo_user.avatar.attach(io: file, filename: 'demoavatar.jpg')
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all
User.destroy_all
UserItem.destroy_all

15.times do 
  Item.create(name: Faker::Commerce.product_name, category: Faker::Commerce.department, price: rand(10..200), img_url: Faker::Fillmurray.image )
end 

15.times do 
  User.create(name: Faker::FunnyName.name, slogan: Faker::Hipster.sentence, img_url: Faker::LoremPixel.image)
end 


60.times do 
  UserItem.create(user_id: User.all.sample.id, item_id: Item.all.sample.id)
end 

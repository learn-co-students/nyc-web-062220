
puts "...Destroying Trainers"
Trainer.destroy_all
puts "...Destroying Gyms"
Gym.destroy_all

puts "...Creating Gyms"
Gym.create(name: 'Average Joes', img_url: 'https://pbs.twimg.com/profile_images/2565006150/image.jpg')
Gym.create(name: 'Globo Gym', img_url: 'https://images-na.ssl-images-amazon.com/images/I/51KWOXy3k1L._AC_.jpg')


puts "...Creating Trainers"

Trainer.create(name: 'Greg', age: 15, bio: 'Trust Me I Train', gym_id: Gym.all.sample.id)
Trainer.create(name: 'Scott', age: 40, bio: ' Do not Trust Me I am a skeleton', gym_id: Gym.all.sample.id)
Trainer.create(name: 'Forrest', age: 29, bio: 'feel however you want', gym_id: Gym.all.sample.id)

puts "Complete!!"
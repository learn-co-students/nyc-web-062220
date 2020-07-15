
puts "...Destroying Trainers"
Trainer.destroy_all

puts "...Creating Trainers"

Trainer.create(name: 'Greg', age: 15, bio: 'Trust Me I Train')
Trainer.create(name: 'Scott', age: 40, bio: ' Do not Trust Me I am a skeleton')
Trainer.create(name: 'Forrest', age: 29, bio: 'feel however you want')

puts "Complete!!"
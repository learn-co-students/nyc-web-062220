require 'pry'

class Animal
  attr_accessor :name, :age

  def initialize(name, age)
    self
    @name = name
    @age = age
  end

  def say_hi
    "Hi, my name is #{self.name}"
  end
  
  def self.walk
    "Hey there, I'm walking here. 🤡"
  end
end

class Dog < Animal
  attr_accessor :breed

  def initialize(name, age, breed)
    super(name, age)
    @breed = breed
  end

  def bark
    
  end
end

perky = Dog.new("Perky", 10, "German Shepherd")

binding.pry
puts 'okthxbye' 
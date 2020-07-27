class Item < ApplicationRecord
  has_many :user_items
  has_many :users, through: :user_items

  # price has to be larger then 500 1000000
  # name has to have a name 
  # name nothing can have the same name
  # category has to be one from a specific list 

  # validates :attribute, :validation_helper :rules
  validates :price, numericality: {greater_than: 500, less_than: 1000000, only_integer: true} 
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :category, inclusion: {in: %w(foods sports hats)}

  validate :name_can_not_be_greg

  def name_can_not_be_greg
    if self.name && self.name.downcase == "greg"
      self.errors.add(:name, "can not be ME!!!!")
    end 

  end
end

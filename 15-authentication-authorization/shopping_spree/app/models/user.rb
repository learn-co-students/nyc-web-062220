class User < ApplicationRecord
  has_many :user_items, dependent: :destroy
  has_many :items, through: :user_items

  has_secure_password

  # def password=(secret)
  #   hashed_pass = BCrypt::Password.create(secret)

  #   self.password_digest = hashed_pass
  # end 

  # def password
  #   self.password_digest
  # end
end

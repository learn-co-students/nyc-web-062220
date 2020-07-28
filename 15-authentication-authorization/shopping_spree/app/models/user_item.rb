class UserItem < ApplicationRecord
  belongs_to :user, optional: :true
  belongs_to :item
end

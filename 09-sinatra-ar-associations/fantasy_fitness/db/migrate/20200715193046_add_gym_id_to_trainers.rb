class AddGymIdToTrainers < ActiveRecord::Migration
  def change
    add_column :trainers, :gym_id, :integer
  end
end

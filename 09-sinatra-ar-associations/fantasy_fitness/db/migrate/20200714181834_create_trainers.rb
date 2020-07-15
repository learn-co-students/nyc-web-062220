class CreateTrainers < ActiveRecord::Migration
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :bio
      t.integer :age
      
      t.timestamps
    end
    
  end
end

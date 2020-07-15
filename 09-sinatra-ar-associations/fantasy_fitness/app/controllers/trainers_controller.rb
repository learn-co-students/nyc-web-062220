class TrainersController < ApplicationController
    # INDEX Action
    get '/trainers' do
      @trainers = Trainer.all
  
      erb :"trainers/index"
    end
  
    # NEW Action
    get '/trainers/new' do 
      @gyms = Gym.all

      erb :"trainers/new"
    end 
  
    # CREATE Action
    post '/trainers' do 
      @trainer = Trainer.create(params)
  
      redirect to "/trainers/#{@trainer.id}"
      # redirect to "/gyms/#{@trainer.gym.id}"
    end 
  
    # SHOW Action
    get '/trainers/:id' do
      @trainer = Trainer.find(params[:id])
  
      erb :"trainers/show"
    end
  
    # EDIT Action
    get '/trainers/:id/edit' do
      @trainer = Trainer.find(params[:id])
      
      erb :"trainers/edit"
    end
    
    patch '/trainers/:id' do 
      @trainer = Trainer.find(params[:id])
    
      @trainer.update(params[:trainer])
      
      redirect to "/trainers/#{@trainer.id}"
    end 
  
end 
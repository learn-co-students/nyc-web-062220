require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true 
  end

  get "/" do
    erb :welcome
  end

  # INDEX Action
  get '/trainers' do
    @trainers = Trainer.all

    erb :index
  end

  get '/trainers/new' do 
    erb :new
  end 

  # CREATE Action
  post '/trainers' do 
    trainer = Trainer.create(params)
    
    redirect to "/trainers/#{trainer.id}"
  end 

  # SHOW Action
  get '/trainers/:id' do
    @trainer = Trainer.find(params[:id])

    erb :show
  end

  # EDIT Action
  get '/trainers/:id/edit' do
    @trainer = Trainer.find(params[:id])
    
    erb :edit
  end
  
  patch '/trainers/:id' do 
    @trainer = Trainer.find(params[:id])
  
    @trainer.update(params[:trainer])
    
    redirect to "/trainers/#{@trainer.id}"
  end 


end

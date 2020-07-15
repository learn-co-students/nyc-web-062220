class GymsController < ApplicationController

   # INDEX Action
   get '/gyms' do
    @gyms = Gym.all

    erb :"gyms/index"
  end


  # SHOW Action
  get '/gyms/:id' do 
    @gym = Gym.find(params[:id])

    erb :"gyms/show"
  end

end 
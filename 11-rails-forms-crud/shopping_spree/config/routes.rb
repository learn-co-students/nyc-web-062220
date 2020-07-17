Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #VERB URL    CONTROLLER#ACTION   HELPER 
  get '/items', to: "items#index", as: 'items'
  get '/items/new', to: "items#new", as: 'new_item'
  get '/items/:id', to: "items#show", as: 'item'
  get '/items/:id/edit', to: "items#edit", as: 'edit_item'

  post '/items', to: "items#create"
  patch '/items/:id', to: "items#update"
  delete '/items/:id', to: "items#destroy" 
end


require "sinatra"
require "pry"

# Index page
get "/users" do
  '<h1> THESE ARE ALL THE USERS </h1>'
end 

# Show Page
get "/users/:id" do
  "hi user #{params[:id]}"
end 


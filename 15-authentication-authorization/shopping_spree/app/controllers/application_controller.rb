class ApplicationController < ActionController::Base
  before_action :authorized

  def set_user
    # @current_user = User.find(id: session[:user_id])
    @current_user = User.find_by(id: session[:user_id])
  end 

  def authorized
    redirect_to new_user_path unless set_user
  end 

end

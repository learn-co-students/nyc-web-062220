class SessionsController < ApplicationController


  def reset_page
    cookies[:page_count] = 0
    
    redirect_back fallback_location: items_path
  end

end

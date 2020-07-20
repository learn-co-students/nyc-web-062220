class UserItemsController < ApplicationController


  def new 
    @user_item = UserItem.new

    @users = User.all
    @items = Item.all
  end
  
  def create 
    @user_item = UserItem.create(user_item_params)

    # redirect_to user_path(@user_item.user_id)
    redirect_to user_path(@user_item.user)
  end 

  private 

  def user_item_params
    params.require(:user_item).permit(:user_id, :item_id)
  end 
end

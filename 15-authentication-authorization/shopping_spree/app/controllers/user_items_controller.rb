class UserItemsController < ApplicationController

  def new 
    @user_item = UserItem.new

    @users = User.all
    @items = Item.all
  end
  
  def create 
    # @current_user
    UserItem.create(user_id: @current_user.id,  item_id: params[:user_item][:item_id])
    # .user_items << UserItem.create(user_item_params)
    # byebug
    # redirect_to user_path(@user_item.user_id)
    redirect_to user_path(@current_user)
  end 

  private 

  def user_item_params
    params.require(:user_item).permit(:item_id)
  end 
end

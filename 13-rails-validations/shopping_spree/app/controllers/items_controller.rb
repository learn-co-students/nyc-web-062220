class ItemsController < ApplicationController
  before_action :find_item, only: [:show, :edit, :update, :destroy]

  def index
    @items = Item.all 
    # render :index
  end 

  def show 
    # @item = Item.find(params[:id])

    # render :show
  end

  def new
    @item = Item.new
  
    render :new
  end 
  
  def create 
    @item = Item.create(item_params) 

    # @item = Item.new(item_params) 
    # if @item.save

    if @item.valid?
      flash[:success] = "SWEET NEW ITEM"
      redirect_to item_path(@item)
    else 
      flash[:my_errors] = @item.errors.full_messages
      redirect_to new_item_path 
    end 
    # redirect_to item_path(item.id)
    # redirect_to item
  end 

  def edit 
    # @item = Item.find(params[:id])
  end 

  def update 
    # @item = Item.find(params[:id])
    if @item.update(item_params)
      redirect_to item_path(@item)
    else
      flash[:my_errors] = @item.errors.full_messages 
      redirect_to edit_item_path
    end 

    
  end 
  
  def destroy 
    # @item = Item.find(params[:id])
    @item.destroy 

    redirect_to items_path
  end 


  private 

  def item_params
    params.require(:item).permit(:name, :price, :category, :img_url)
  end 

  def find_item
    @item = Item.find(params[:id])
  end 

end

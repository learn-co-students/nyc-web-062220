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
   item = Item.create(item_params) 

    # redirect_to item_path(item.id)
    redirect_to item_path(item)
    # redirect_to item
  end 

  def edit 
    # @item = Item.find(params[:id])
  end 

  def update 
    # @item = Item.find(params[:id])
    @item.update(item_params)
    
    redirect_to item_path(@item)
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

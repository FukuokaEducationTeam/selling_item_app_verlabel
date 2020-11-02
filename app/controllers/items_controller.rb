class ItemsController < ApplicationController

  def index
    @items = Item.order(created_at: :desc)
  end

  def new
    @item = Item.new
    @item.images.build
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :price, images_attributes: [:id, :name]).merge(user_id: current_user.id)
  end
end

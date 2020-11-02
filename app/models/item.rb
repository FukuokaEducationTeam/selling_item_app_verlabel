class Item < ApplicationRecord
  has_many :images

  accepts_nested_attributes_for :images

  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true
end

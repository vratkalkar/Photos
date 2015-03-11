class Photo < ActiveRecord::Base
  belongs_to :user
  belongs_to :category

  validates :name, presence: true
  validates :photo_url, presence: true

end
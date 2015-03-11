class User < ActiveRecord::Base
  has_many :photos, through: :categories
end
class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name, null: false
      t.string :photo_url, null: false
      t.references :user
      t.references :category

      t.timestamps
    end
  end
end

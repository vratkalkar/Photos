require 'spec_helper'

describe "Photos controller" do
  let(:photo) {Photo.create(name: "Demo Photo", photo_url: "www.photo.com/new_photo", category_id: 1)}
  let(:category) {Category.create(title: "Demo Category")}

  describe "GET /photos" do
  it "displays all photos page" do
    get '/photos'
    expect(last_response).to be_ok
  end
 end

 describe "GET /photos/:id" do
  it "displays all photos page" do
    get "/photos/#{photo.id}"
    expect(last_response).to be_ok
  end
 end

 describe "GET /categories/:category_id/photos/uploader" do
  it "displays the photo uploader" do
   get "/categories/#{category.id}/photos/uploader"
   expect(last_response).to be_ok
  end
 end

 describe "GET /photos/:id/edit" do
  it "displays all photos page" do
    get "/photos/#{photo.id}/edit"
    expect(last_response).to be_ok
  end
 end


describe "delete /photos/:id" do
  it "deletes a photo" do
    delete "/photos/#{photo.id}"
    expect(last_response).to be_redirect
    follow_redirect!
    expect(last_request.path).to eq("/categories/#{Category.first.id}")
  end
 end
end
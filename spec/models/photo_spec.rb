require 'spec_helper'

describe Photo do
let(:photo) {Photo.create(name: "Demo Photo", photo_url: "www.photo.com/new_photo")}

  it "has a populated name field" do
    expect(photo.name).to be_valid
  end

  it "has a populated photo url" do
    expect(photo.photo_url).to be_valid
  end

end
get '/photos/new' do
end

get '/categories/:category_id/photos/uploader' do |category_id|
  @category = Category.find(category_id)
  erb :"photo/uploader"
end

get '/photos/:id' do
  @photo = Photo.find(params[:id])
  erb :"photo/show"
end

post '/photos/uploader' do
  p params
  @filename = params[:file][:filename]
  file = params[:file][:tempfile]
  photo_url = "/img/#{@filename}"

  File.open("public/img/#{@filename}", "wb") do |f|
    f.write(file.read)
  end

  category = Category.find(params[:category_id])
  category.photos.create(params[:photo].merge({photo_url: photo_url}))

  redirect "/categories/#{category.id}"
end

get '/photos/:id/edit' do
  @photo = Photo.find(params[:id])
  erb :"photo/edit"
end

put '/photos/:id' do
end

delete '/photos/:id' do
  photo = Photo.find(params[:id])
  category = photo.category_id
  photo.destroy

  redirect "/categories/#{category}"
end
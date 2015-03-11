get '/categories' do
  @categories = Category.all
  erb :"category/all"
end
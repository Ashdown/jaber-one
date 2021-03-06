require 'sinatra'

get '/' do
  erb :homepage
end

get '/processing-payments' do
  erb :processing_payments
end

get '/taking-payments' do
  erb :taking_payments
end


get '/about-us' do
  erb :about_us
end

get '/developers' do
  erb :developers
end

get '/news' do
  erb :news
end

get '/news/article' do
  erb :article
end

get '/help' do
  erb :help
end

get '/content' do
  erb :content
end

get '/search' do
  erb :search
end

get '/404' do
  erb :page_not_found
end

get '/500' do
  erb :server_error
end
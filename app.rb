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
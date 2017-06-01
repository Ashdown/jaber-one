require 'sinatra'

get '/' do
  erb :homepage
end

get '/processing-payments' do
  erb :processing_payments
end

get '/about-us' do
  erb :about_us
end

get '/news' do
  erb :news
end

get '/news/article' do
  erb :article
end
require 'sinatra'

get '/' do
  erb :homepage
end

get '/processing-payments' do
  erb :processing_payments
end

get '/news' do
  erb :news
end
Rails.application.routes.draw do
  get '/' => 'calendar#index'
  get '/test' => 'calendar#test'
end

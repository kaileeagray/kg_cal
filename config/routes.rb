Rails.application.routes.draw do
  resources :events
  get '/' => 'calendar#index'
  get '/test' => 'calendar#test'
end

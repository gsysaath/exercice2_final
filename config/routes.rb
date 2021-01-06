Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/complete', to: 'pages#complete'
  resources :forms, only: [:new, :create, :show]
  resources :users, only: :create

end

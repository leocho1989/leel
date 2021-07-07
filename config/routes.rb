Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users do
    resources :leel_posts, only: [:index]
    end

    resource :session, only: [ :create, :destroy ]

    post '/search', to: 'users#search'

    resources :leel_posts
    resources :likes, only: [:create]
    delete '/likes', to:'likes#destroy'
    
    resources :follows, only: [ :create, :destroy ]
  end
end

Rails.application.routes.draw do
  devise_for :users
  root "items#index"
  resources :items, only: %i(index new create)
end

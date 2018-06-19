Rails.application.routes.draw do
  root 'application#index'

  # Handle all other paths with root action
  get '*path', to: 'application#index'
end

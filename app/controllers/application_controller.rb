class ApplicationController < ActionController::Base

  def index
    @props = { app: { name: 'Pradeep' } }
    render 'layouts/index'
  end
end

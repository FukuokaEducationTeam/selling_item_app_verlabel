class ApplicationController < ActionController::Base
  before_action :configure_pertmitted_paramaters, if: :devise_controller?

  private
  def configure_pertmitted_paramaters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end
end

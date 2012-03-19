class JotsController < ApplicationController
  layout 'application3'
  def new

  end

#  def create
#    jot_create_response = api_connect('me/jots.json', params, 'post', false, true)
#    facebook_post_status_response = api_connect('me/facebook/status.json', { :message => params[:title] }, 'post', false, true) if @current_user['facebook_id'].present?
#    twitter_post_status_response = api_connect('me/twitter/status.json', { :status => params[:title] }, 'post', false, true) if @current_user['twitter_id'].present?
#
#    if jot_create_response['failed'] === false
#      redirect_to root_path, :notice => "Your jot was posted"
#    else
#      redirect_to new_jot_path
#    end
#  end

  def create
    respond_to do |format|
      format.json do
        render :json => api_connect('/me/jots.json', params[:jot], 'post', true, true)
      end

      format.all { respond_not_found }
    end
  end

  def index
    
    respond_to do |format|
      format.json do
        unless @current_user.present?
          render :json => api_connect('jots/index.json', params[:jot], 'get', true)
        else
          
        end
      end

      format.html do
        
      end

      format.all { respond_not_found }
    end
  end
end

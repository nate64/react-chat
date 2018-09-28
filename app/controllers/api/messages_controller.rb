class Api::MessagesController < ApplicationController
  
  def create
    MessageBus.publish "/chat_channel", { email: params[:email], body: params[:body] }
  end

end

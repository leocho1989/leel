class Api::LikesController < ApplicationController
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.leel_id = params[:id]
       unless @like.save
        flash[:errors] = @like.errors.full_messages
       end
    end

    def destroy
        @like= Like.find_by(user_id: current_user.id, leel_id: params[:id])
        @like.destroy
    end
    
end
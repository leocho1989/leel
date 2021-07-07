class Api::LikesController < ApplicationController
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.leel_id = params[:id]
        if @like.save
            @leel = @like.leel
            render "api/leels/show"
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    def destroy
        @like. = Like.find_by(user_id: current_user.id, leel_id: params[:id])
        @like.destroy
        @leel = @like.leel
        render "api/leels/show"
    end
    
end
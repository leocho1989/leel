class LikesController < ApplicationController
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.leel_id = params[:leel_id]
        unless @like.save
            flash[:errors] = @like.errors.full_messages
        end
        redirect_to leel_url(params[:id])
    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        redirect_to leel_url(@like.leel_id)
    end
end

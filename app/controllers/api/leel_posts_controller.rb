class Api::LeelPostsController < ApplicationController
    def create
        @leel = current_user.leel_posts.new(leel_params)
        if @leel.save
            render :show
        else
            render @leel.errors.full_messages, status:401
        end
    end

    def update
        # @leel = current_user.leel_posts.find(params[:id])
       @leel = LeelPost.find(params[:id])
       if @leel.update(leel_params)
        render json: @leel
       else
        render json: @leel.errors.full_messages, status: 422
       end
    end

    def show
        render json: LeelPost.find(params[:id])
    end

    def index
        # @leel =LeelPost.all
        @leels = if params[:user_id]
            LeelPost.where(author_id: params[:user_id])
        else
            LeelPost.all
        end

        # render json: @leels

        if @leels
            render :show
        else
            render json: @leel.errors.full_messages, status:404
        end
    end

    def destroy
      @leel = current_user.leel_posts.find(params[:id])
      @leel.destroy
      render json: @leel
    end

    private
    
    def leel_params
        params.permit(:body, :title, :author_id, photos:[])
        
    end

end
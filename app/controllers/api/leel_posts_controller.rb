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
        @leel = selected_leel
        if @leel && @leel.update_attributes(leel_params)
            render :show
        elsif !@leel
            render json: ['Could not find Leel'], status: 400
        else
            render json: @leel.errors.full_messages, status:401
        end
    end

    def show
        @leel = selected_leel
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
        params.permit(:body, :author_id)
    end

    def selected_leel
        LeelPost.find_by(params[:id])
    end
end
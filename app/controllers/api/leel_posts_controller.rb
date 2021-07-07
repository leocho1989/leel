class Api::LeelPostsController < ApplicationController
    def create
        @leel = LeelPost.new(leel_params)
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
        @leel =LeelPost.all
    end

    def destroy
        @leel = selected_leel
        if @leel
            @leel.destroy
            render:show
        else
            render ['Could not find Leel']
        end
    end

    private
    
    def leel_params
        params.require(:leel_post).permit(:body, :author_id)
    end

    def selected_leel
        LeelPost.find_by(params[:id])
    end
end
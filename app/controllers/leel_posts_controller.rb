class LeelPostsController < ApplicationController

    def new
        @leel = LeelPost.new
        render :new
    end

    def create
        @leel = LeelPost.new(leel_params)
        @leel.author_id = current_user.id
        if @leel.save
            redirect_to leel_url(@leel)
        else
            render json: @leel.errors.full_messages, status:422
        end
    end

    def show
        @leel = LeelPost.find(params[:id])
        if @leel
            render :show
        else
            render json: @leel.errors.full_messages, status:404
        end
    end

    def index
        @leels = if params[:user_id]
            LeelPost.where(author_id: params[:user_id])
        else
            LeelPost.all
        end
        render :index
         end
        
    def edit
        @leel = LeelPost.find(params[:id])
        render :leel_post
    end

    def update
        @leel = LeelPost.find(params[:id])
        if @leel.update(leel_params)
            redirect_to leel_post_url(@leel)
        else
            render json: @leel.errors.full_messages, status: 422
        end
    end

    def destroy
        @leel = Leel.find(params[:id])
        if @leel.destroy
            redirect_to leel_posts_url
        else
            render plain: "Something went wrong"
        end
    end

    private
    def leel_params
        params.require(:leel).permit(:body, :author_id)
    end
end

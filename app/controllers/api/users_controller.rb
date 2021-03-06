class Api::UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages,
            status: 400
        end
    end

    def show
        @user= User.find(params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages,
            status: 400
        end
    end

    def index
        @users = User.all
        render :index
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end
        

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            redirect_to user_url(@user)
        else render json: @user.errors.full_messages,
            status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user.destroy
            redirect_to users_url
        else
            render json: ['Invalid username']
        end
    end

    def search
        @user = User.where("username LIKE '%#{params[:query]}%'")
        render json :users
    end

    private

    def user_params
        params.require(:user).permit(:username, :password,:email)
    end
        
end

class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json:["Wrong username or password"],status: 401
        end
    end

    def destroy
        @user = current_user
        logout!
        render json: {message: 'You have successfully logged out!'}
    end
end

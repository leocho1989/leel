class Api::FollowsController <ApplicationController

    def create
        @follow= Follow.new
        if params[:id] !=current_user.id
        @follow.followee_id = params[:id]
        @follow.follower_id = current_user.id
        end
        unless @follow.save
            flash[:errors] = @follow.errors.full_messages
        end
        # redirect_to user_url(params[:id])
    end

    def destroy
        @follow = Follow.find_by(follower_id: current_user.id, followee_id:params[:id])
    
        @follow.destroy
    end
end
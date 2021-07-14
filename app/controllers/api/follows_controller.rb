class Api::FollowsController <ApplicationController

    def create
        @follow= Follow.new
        @follow.followee_id = params[:id]
        @follow.follower_id = current_user.id
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
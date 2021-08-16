# README

leel is a clone website of Tumblr, Tumblr is an American microblogging and social networking website which allows users to post multimedia and other content to a short-form blog.

Link to leel: [https://leels.herokuapp.com](https://leels.herokuapp.com/)

leel is developed by using Ruby on Rails, React, HTML and CSS.

* Feature 1: leels(Posts form for various post types)
  Users can post like texts, images, quotes and links. Making different post pages for different feature was some challenging parts I faced and needed a lot of time to work on it. I tried my best to manage time well and use resources well when having bugs.

* Feature 2: Likes
  Users can like leels and check how many likes that specific leel has. Working on this feature was a lot of fun. It enriched the fun for the users.
  
* Feature 3: Follows
  Users can follow the users the like, every user mini page will show follower numbers.
  
* Feature 4: Search
  Users can search user name to go to user's post page.

Highlights:

<img src="https://app-leel-pro.s3.us-west-1.amazonaws.com/Screen+Shot+2021-07-16+at+6.26.58+AM.png"/>

<img src="https://app-leel-pro.s3.us-west-1.amazonaws.com/Screen+Shot+2021-07-16+at+6.27.51+AM.png"/>

Code Snippets:

* JavaScript

  I used JS hook to make my code clean and easy to write.

```JavaScript

export default ( {leel} ) =>{

  const dispatch = useDispatch();
const currentUser = useSelector((state) => state.session.currentUser);
  
   const usersOb = useSelector((state) => state.users);
    
   const users = Object.keys(usersOb).map(key=>usersOb[key]);


   const user = users.filter(userOb=>userOb.username===leel.author_username)[0];


   const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [body=leel.body,setBody] = useState();
  const [title=leel.title, setTitle] = useState();


    const handleDelete =(e)=>{
        e.preventDefault();
        dispatch(deleteLeel(leel));
    };
```
     
* Ruby

  I used Ruby for backend authentication feature. 
  It was easy and clear to use Ruby for authentication coding part.

```Ruby

class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?


    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token:session[:session_token])
    end
    
    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

        
    def logged_in?
        !!current_user
    end
        
    def require_logged_out
        redirect_to user_url(current_user) if logged_in?
    end
        
    def require_logged_in
        redirect_to new_session_url unless logged_in?
    end
  

end
```

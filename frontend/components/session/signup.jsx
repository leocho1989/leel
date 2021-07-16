import React from 'react';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            errorMessages: []
        };
        this.handleSubmit= this.handleSubmit.bind(this);
this.handleDemoUser = this.handleDemoUser.bind(this);

         }

             componentDidUpdate(PreProps){
     if (this.props.errors!== PreProps.errors) {
         this.setState({ errorMessages: this.props.errors});}

    }

   

    handleInput(type) {
        return (e)=>{
            this.setState({[type]:e.target.value});
             };
             }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state).then(()=>this.props.history.push('/leel_posts'));
    }

    handleDemoUser (e) {
     e.preventDefault(); 
 this.props.login({
    username: 'demo',
    password: 'password',
    id:9
})
    .then(() => this.props.history.push('/leel_posts'));
}
render() {
    return (
        
        <div>

            <form className='form'>
<h2 className='sentence'>Join us now!</h2>
{this.state.errorMessages.map((error, i) => <div key={i}><p>*{error}</p></div>)}
            <label >
                
            <input className="input_login" type="text" placeholder="username" value={this.state.username} onChange={this.handleInput('username')} /></label>
            <br></br>

            <label>
                <input className="input_login" type="text" placeholder="email" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
        <br></br>
            <label >
                <input className="input_login" type="password" placeholder="password" value={this.state.password} onChange={this.handleInput('password')}/>
            </label>
            <br></br>
            <button id="btn" onClick={this.handleSubmit}>Sign Up</button>
            <p><button id="demobtn" to="/" onClick={this.handleDemoUser}>Demo User</button></p>
            </form>
            
        </div>

    )}
}

export default Signup;
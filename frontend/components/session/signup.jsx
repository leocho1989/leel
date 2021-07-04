import React from 'react';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:""
        };
        this.handleSubmit= this.handleSubmit.bind(this);
         }

    handleInput(type) {
        return (e)=>{
            this.setState({[type]:e.target.value});
             };
             }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state).then(()=>this.props.history.push('/leels'));
    }
render() {
    return (
        
        <div>

            <form className='form'>
<h2>leel</h2>
            
            <label >
                
            <input type="text" placeholder="username" value={this.state.username} onChange={this.handleInput('username')} /></label>
            <br></br>

            <label>
                <input type="text" placeholder="email" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
        <br></br>
            <label >
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput('password')}/>
            </label>
            <br></br>
            <button id="btn" onClick={this.handleSubmit}>Sign Up</button>
            </form>
            
        </div>

    )}
}

export default Signup;
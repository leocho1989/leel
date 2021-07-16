import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {


    componentDidUpdate(PreProps){
     if (this.props.errors!== PreProps.errors) {
         this.setState({ errorMessages: this.props.errors});}
        
    }

constructor(props) {
super(props);
this.state = {
    username: '',
    password: '',
    id: '',
errorMessages:[]};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    
}

handleInput(type) {
    return (e)=>{
        this.setState({[type]: e.target.value});
    };
}

handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    .then(() => this.props.history.push('/leel_posts'));
}

handleDemoUser (e) {
     e.preventDefault();
this.props.login({
    username: 'demouser',
    password: 'password',
    id:9
})
    .then(() => this.props.history.push('/leel_posts'));
}

render() {
     if (this.props.currentUser)
    {
        return (<Redirect to="/leel_posts" />);
    }
    return (
    <div className="form">
        <h2 className="sentence">Welcome back!</h2>
        <form>
         
             {this.state.errorMessages.map((error, i) => <div key={i}><p>*{error}</p></div>)}
            <label>
                <input className="input_login" type="text" placeholder="username" value={this.state.username} onChange={this.handleInput('username')} />
            </label>
            <br></br>
            <label>
                <input className="input_login" type="password" placeholder="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <br></br>
            <button id="btn" onClick={this.handleSubmit}>Log in</button>
            <p><button id="demobtn" to="/" onClick={this.handleDemoUser}>Demo User</button></p>
        </form>

    </div>
    )}
}

export default Login;
import React from 'react';
import {Redirect} from 'react-router-dom';
import DemoUser from './demo_user';

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
errorMessages:[]};

    this.handleSubmit = this.handleSubmit.bind(this);
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
                <input type="text" placeholder="username" value={this.state.username} onChange={this.handleInput('username')} />
            </label>
            <br></br>
            <label>
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <br></br>
            <button id="btn" onClick={this.handleSubmit}>Log in</button>
            <p><DemoUser /></p>
        </form>

    </div>
    )}
}

export default Login;
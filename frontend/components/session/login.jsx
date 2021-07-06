import React from 'react';

class Login extends React.Component {

     componentDidUpdate(pProps) {
             if(this.props.missing !== pProps.missing) {
                 this.setState({
                     errorMessages: this.props.missing,
                });
             }
         }


constructor(props) {
super(props);
this.state = {
    username: '',
    password: ''};

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
    .then(() => this.props.history.push('/leels'));
}
render() {
    return (
    <div className="form">
        <h2>Log In</h2>
        <form>
             {this.state.errorMessages.map((eachError, i) => <div key={i}><li>*{eachError}</li></div>)}
            <label>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.handleInput('username')} />
            </label>
            <br></br>
            <label>
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            <br></br>
            <button id="btn" onClick={this.handleSubmit}>Log in</button>
        </form>

    </div>
    )}
}

export default Login;
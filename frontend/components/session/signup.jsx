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
         }

        //  componentDidMount(props) {
             
        //      console.log(this.props);
        //  }

         componentDidUpdate(pProps) {
             if(this.props.missing !== pProps.missing) {
                 this.setState({
                     errorMessages: this.props.missing,
                })
                alert(2)
             }
                
             console.log(this.props);
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
            {this.state.errorMessages.map((eachError, i) => <div key={i}>{eachError}</div>)}
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
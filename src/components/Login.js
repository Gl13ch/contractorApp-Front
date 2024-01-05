import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMsg: "",
            toggleLogin: true,
            toggleError: false,
            toggleLogout: false,
            currUser: {},
        }
    };

    handleInputChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleLogin = (userObj) => {
    //     axios.put('http://localhost:8000/users/login',
    //     {
    //         username:userObj.username,
    //         password:userObj.password,
    //     })
    //     .then((res) => {
    //         if(res.data.username){
    //             // only shows up upon successful login
    //             console.log('signed in');
    //             this.state({
    //                 toggleError: false,
    //                 errorMsg: "",
    //                 currUser: (res.data),
    //             })
    //             this.handleToggleLogout();
    //         } else {
    //             console.log('signup error', res);
    //             this.state({
    //                 toggleError: true,
    //                 errorMsg: res.data.error,
    //             })
    //         }
    //     });
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     let userCredentials = {
    //         username: this.state.username,
    //         password: this.state.password,
    //     };
    //     this.handleLogin(userCredentials)
    // }

    // handleUsernameChange = (e) => {
    //     this.setState({ 
    //         [e.target.username]: e.target.value, 
    //     });
    // }

    // handlePasswordChange = (e) => {
    //     this.setState({ 
    //         [e.target.password]: e.target.value, 
    //     });
    // }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' onChange={this.handleUsernameChange}/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' onChange={this.handlePasswordChange}/>
                    <input type='submit'/>
                    {this.toggleError && <h5>{this.errorMsg}</h5>}
                </form>
            </div>
        );
    }
}

export default Login
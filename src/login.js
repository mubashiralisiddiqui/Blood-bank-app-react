import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './home';
import {browserHistory,Link} from 'react-router';
import * as firebase from 'firebase';


class Login extends React.Component {
  login(ev) {
    ev.preventDefault();
    console.log(this.refs.email.value);
    console.log(this.refs.Password.value);
   let email = this.refs.email.value;
    let password = this.refs.Password.value;
    firebase.auth().signInWithEmailAndPassword
    (email,password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  // ...
})
     .then((user) => {
       let userDetails = {
           name: user.email,
           
           
         }
          console.log(user)
          console.log(user.uid)
          // var auth = true;
          // this.setState({
          //   auth: auth
          // })
         browserHistory.push('/home')

         console.log("logn success")
         firebase.database().ref('login/').push(userDetails)
  
    })
    
  }
  render() {
  
    return (
      <div className="jumbotron col-sm-9">
        
        <h1 className="text-center">Login</h1>
      <form onSubmit={this.login.bind(this)}>
        <div className ="form-group">
        <label>Name</label>
        <input className="form-control" type="email" ref="email" />
        <label>Password</label>
        <input className="form-control" type="Password" ref="Password" />
        <button className="btn-primary rounded">login</button>
      {/*<Link to="/home">  <button className="btn-primary rounded">Back</button></Link>*/}
        
        </div>
      </form>
       
      </div>
    )
  }
}

export default Login;

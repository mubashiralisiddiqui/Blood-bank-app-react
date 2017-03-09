import React from 'react';
//import logo from './logo.svg';
import '../App.css';
// import Home from './home';
import {browserHistory,} from 'react-router';
import * as firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Login extends React.Component {
  login(ev) {
    ev.preventDefault();
    console.log(this.refs.email.getValue());
    console.log(this.refs.Password.getValue());
   let email=this.refs.email.getValue();
    let password=this.refs.Password.getValue();
    firebase.auth().signInWithEmailAndPassword(email,password)
     .catch(function(error) {
  // Handle Errors here.
  var errorCode=error.code;
  var errorMessage=error.message;
  if (errorCode==='auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
})

     .then((user) => {
      //  let userDetails={
      //      name: user.email,
           
           
      //    }
      //     console.log(user)
      //     console.log(user.uid)
          // var auth = true;
          // this.setState({
          //   auth: auth
          // })
         browserHistory.push('/home')

         console.log("logn success")
        //  firebase.database().ref('login/').push(userDetails)
  
    })
    
  }
  render() {
  
    return (
      <div className="">
        
        <h1 className="text-center">Login</h1>
         <div className="form">
      <form onSubmit={this.login.bind(this)}>

        
            <TextField hintText="Email" ref="email" /> <br />
            <br />
            <TextField type="password" hintText="Password" ref="Password" /> <br />
            <br />

               <RaisedButton  type="submit" label="Login" primary={true} />
        {/*<div className="form-group">
        <label>Email</label>
        <input className="form-control" type="email" ref="email" />
        <label>Password</label>
        <input className="form-control" type="Password" ref="Password" />
        <button className="btn-primary rounded">login</button>*/}
      {/*<Link to="/home">  <button className="btn-primary rounded">Back</button></Link>*/}
        
        {/*</div>*/}
      </form>
      </div>
       
      </div>
    )
  }
}

export default Login;

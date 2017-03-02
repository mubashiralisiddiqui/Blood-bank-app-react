import React from 'react';
import {Link} from 'react';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router';
// import Home from "./home";
class Signup extends React.Component {
  constructor(props){
    super(props);
    this.signup=this.signup.bind(this)
  }
  signup(ev) {
    ev.preventDefault();
    console.log(this.refs.email.value);
    console.log(this.refs.Password.value);
    let email = this.refs.email.value;
    let password = this.refs.Password.value;
    firebase.auth().createUserWithEmailAndPassword
    (email, password)
    .then((user) => {
       let userDetails = {
           username: user.email,
           
         }
          // browserHistory.push('/login')
        
         firebase.database().ref('signupusers/').push(userDetails)
  
    })
    
  }
  render() {
  
    return (
      <div className="jumbotron col-sm-9 input">
        <h1 className="text-center">signup</h1>
      <form onSubmit={this.signup.bind(this)}>
        <div className ="form-group">
        <label>Name</label>
        <input className="form-control" type="email" ref="email" />
        <label>Password</label>
        <input className="form-control" type="Password" ref="Password" />
        <button className="btn-primary rounded">signup</button>
        
        </div>
      </form>
       
      </div>

    )
  }
}

export default Signup;

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
     console.log(this.refs.name.value);
     console.log(this.refs.o.value);
     console.log(this.refs.b.value);
    let name =this.refs.name.value;
    let email = this.refs.email.value;
    let password = this.refs.Password.value;
    firebase.auth().createUserWithEmailAndPassword
    (email, password)
    .then((user) => {
       let userDetails = {
           useremail: user.email,
          username:name 
         }
          // browserHistory.push('/login')
        
           firebase.database().ref('users/' + user.uid).set(userDetails)
  
  
    })
    
  }
  render() {
  
    return (
      <div className="jumbotron col-sm-9 input">
        <h1 className="text-center">signup</h1>
      <form onSubmit={this.signup.bind(this)}>
        <div className ="form-group">
        <label>Name</label>
         <input className="form-control" type="text" ref="name" />
        <label>Email</label>
        <input className="form-control" type="email" ref="email" />
        <label>Password</label>
        <input className="form-control" type="Password" ref="Password" />
        <label>Bloodgroup</label>
        {/*<input className="form-control " type="select" ref="bgroup" >*/}
        <select>
        <option ref = "o">O</option>
         <option ref="a">A+</option>
          <option ref="b">B+</option>
           <option ref="an">A-</option>
            <option ref ="ap">A+</option>
            </select><br/>
        {/*</input>*/}
        
        <button className="btn-primary rounded">signup</button>
        
        </div>
      </form>
       
      </div>

    )
  }
}

export default Signup;

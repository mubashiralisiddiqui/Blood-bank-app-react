import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
// import Signup from './signup'
import Signup from './signup';

import Login from './login';
import {Link} from 'react-router'
  var config = {
    apiKey: "AIzaSyCpyzTcipruNtx6tlYuUoOGRmrzyAf6meo",
    authDomain: "authenticationsignup-5ca1a.firebaseapp.com",
    databaseURL: "https://authenticationsignup-5ca1a.firebaseio.com",
    storageBucket: "authenticationsignup-5ca1a.appspot.com",
    messagingSenderId: "598973496584"
  };
  firebase.initializeApp(config);

class App extends React.Component{

  logout(ev) {
    ev.preventDefault();
    // console.log(this.refs.email.value);
    // console.log(this.refs.Password.value);
    firebase.auth().signOut().then(function() {
  console.log( 'Sign-out successful.')
}, function(error) {
  // An error happened.
})
     
    
  }
  render(){
    return(
      <div>
        
        <header className=" page-header"><h1>Blood Blank </h1>
       
       <Link to ="/signup"> <button  className="btun1 btn-primary rounded">signup</button></Link>
        <Link to ="/login"><button className="btun btn-primary rounded">Login</button></Link>
        
        </header>
      {/*<button className="btn-primary"onClick={this.logout}>Logout</button>*/}
      {this.props.children}
       </div>
    )
    
  }
}
export default App;



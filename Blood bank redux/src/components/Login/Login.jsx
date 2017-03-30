import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './App.css';

import TextField from 'material-ui/TextField';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';
import {SignIn} from '../../actions/authaction'
import {connect}from 'react-redux'
class Login extends Component {
constructor(props){
  super(props);
  this.login=this.login.bind(this)
}
  login(e){
    e.preventDefault();
    var email = this.refs.email.getValue();
    var pass = this.refs.pass.getValue();
    var demo = this.refs.demo;
   let signinDetail={
     email:email,
     password:pass
   } 
   this.props.signin(signinDetail)
  }
  
  render() {
    const style = {
  height: 340,
  width: 400,
  margin: 20,
  // textAlign: 'center',
  display: 'inline-block',
};
    return (
      <div className="App">
        <br /><br /><br /><br />

         <Paper style={style} zDepth={2} >

           <h1>Login</h1>
           
           <p ref="demo">
             <br /> </p>
            <TextField
                  hintText="Email"
                  floatingLabelText="Email" ref="email"
                /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"  ref="pass"
              type="password"
            /><br />

            <RaisedButton backgroundColor="#316dc3" label="Login" primary={true} style={{margin: 12}} onClick={this.login.bind(this)} />
         
         </Paper>
      
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    auth: state.AuthReducer
  }
}
function mapDispatchToProps(dispatch){
return{
  signin:(userSignin)=>{
   dispatch(SignIn(userSignin));
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

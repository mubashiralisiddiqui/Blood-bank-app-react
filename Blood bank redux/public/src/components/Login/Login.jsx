import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { SignIn } from '../../actions/authaction'
import { connect } from 'react-redux'
class Login extends Component {
  constructor(props) {
    super(props);
    this.login=this.login.bind(this)
  }
  login(e) {
    e.preventDefault();
    var email=this.refs.email.getValue();
    var pass=this.refs.pass.getValue();
    let signinDetail = {
      email: email,
      password: pass
    }
    this.props.signin(signinDetail)
    console.log(this.props.fireVal)
    console.log(this.props.loginval)
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
            floatingLabelText="Password" ref="pass"
            type="password"
          /><br />

          <RaisedButton backgroundColor="#316dc3" label="Login" primary={true} style={{ margin: 12 }} onClick={this.login.bind(this)} />

        </Paper>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.AuthReducer,
    fireVal: state.firebaseval,
    loginval: state.authSignIn
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signin: (userSignin) => {
      dispatch(SignIn(userSignin));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from 'react';
import './signup.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MUI from 'material-ui';
import { Link } from 'react-router'
import {AuthMiddleware} from '../../store';
// import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
class SignUp extends React.Component {
    constructor() {
        super();
        this.handelSignup = this.handelSignup.bind(this)
        
    }
    handelSignup(e) {
        e.preventDefault()
      let inputobj={
          email:this.refs.email.getValue(),
          password:this.refs.password.getValue(),
          name:this.refs.name.getValue()
          
      }
      console.log(inputobj);
      this.props.signup(inputobj)
    }
    render() {
        return (
            <div>
                <div className="signup">
                    <MUI.Paper className="Paper">
                        <form onSubmit={this.handelSignup}>
                            <h1>SignUp</h1>
                            <MUI.TextField
                                ref="name"
                                hintText="Name"
                                floatingLabelText="Name"
                                fullWidth={true}
                            />
                            <MUI.TextField
                                ref="email"
                                hintText="E-mail"
                                floatingLabelText="E-mail"
                                fullWidth={true}
                            />
                            <MUI.TextField
                                ref="password"
                                hintText="password"
                                type="password"
                                floatingLabelText="Password"
                                fullWidth={true}
                            />
                            <MUI.RaisedButton label="Signup"
                                primary={true}
                                className="signup-loginBtn"
                                onClick={this.handelSignup}
                                 />
                        </form>

                    </MUI.Paper>
                    <div>
                        <p>already have an account?</p>
                        <Link to="/login"> <MUI.RaisedButton label="Login"
                            primary={true}
                            className="signup-flatButton"
                        /></Link>
                    </div>

                </div>
            </div>
        )
    }
}
// function mapDispatchToProps(dispatch) {
//     // return bindActionCreators({ AuthMiddleware }, dispatch);

// }
function mapDispatchToProps(dispatch) {
  return {
    signup: (credentials) => dispatch(AuthMiddleware.signup(credentials))
  };
}
export default connect(null,mapDispatchToProps) (SignUp);
import React from 'react';
import './login.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MUI from 'material-ui';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {AuthMiddleware} from '../../store';

class Login extends React.Component {

    constructor() {
        super();
        this.handelSignup = this.handel_login.bind(this)
    }
    handel_login(e) {
        e.preventDefault()
        let user={
            email:this.refs.email.getValue(),
            password:this.refs.password.getValue()
        }
        this.props.dispatch1(user)
        console.log(user);
        
    }
    render() {
        return (
            <div>
                <div className="signup">
                    <MUI.Paper className="Paper">
                        <form onSubmit={this.handel_login}>
                            <h1>Login</h1>
                            <MUI.TextField
                                ref="email"
                                hintText="E-mail"
                                floatingLabelText="E-mail"
                                fullWidth={true}
                            />
                            <MUI.TextField
                                ref="password"
                                hintText="password"
                                floatingLabelText="Password"
                                fullWidth={true}
                            />
                            <MUI.RaisedButton label="Login"
                                primary={true}
                                className="signup-loginBtn"
                                onClick={this.handelSignup} />
                        </form>

                    </MUI.Paper>
                    <div>
                        <p>Dont have account?</p>
                       <Link to ="/signup"> <MUI.RaisedButton label="Signup"
                            primary={true}
                            className="signup-flatButton"
                             /></Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: (credentials) => {
            dispatch(AuthMiddleware.signin(credentials))
        }
    }
}
export default connect(null,mapDispatchToProps)( Login);
import React from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './signup.css';
import {connect}from 'react-redux'
import {signup} from '../../actions/authaction'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
    }
    signup(ev) {
        ev.preventDefault();
        console.log(this.refs.email.getValue());
        console.log(this.refs.Password.getValue());
        console.log(this.refs.name.getValue());
        let name = this.refs.name.getValue();
        let email = this.refs.email.getValue();
        let password = this.refs.Password.getValue();
        let userSignUp={
            email:email,
            password:password
        }
        this.props. SignUp(userSignUp)
    }
    render() {
        const style = {
            height: 270,
            width: 400,
            // margin: 20,
            // textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <div>
                <h1 className="text-center">signup</h1>
                <Paper style={style} zDepth={1} >
                    <div className="form">
                        <form onSubmit={this.signup.bind(this)}>
                            <TextField hintText="Name" ref="name" /> <br />
                            <br />
                            <TextField hintText="Email" ref="email" /> <br />
                            <br />
                            <TextField type="password" hintText="Password" ref="Password" /> <br />
                            <br />
                            <RaisedButton type="submit" label="SignUp" primary={true} className="btncolor"/>
                            <Link to="/login"><p>Already have an account?</p></Link>
                        </form>
                    </div>
                </Paper>

                <div className="form">

                </div>

            </div>

        )
    }
}
const mapStateToProps =(state) =>{
    return{
        auth: state.AuthReducer
    };
}
const mapDispatchToProps =(dispatch) =>{
    return{
        SignUp: (userSignUp) =>{
            dispatch(signup(userSignUp));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
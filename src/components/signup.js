import React from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenuSimpleExample from './dropdown'

// import Home from "./home";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.state = {
      value: 1, blood: '',
      bloods: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']

    };

  }

  handleChange = (event, index, value) => {
    this.setState({ value });
    var b = event.target.childNodes[0].nodeValue;
    this.setState({ blood:b });
    console.log(this.state.blood);
  }
  signup(ev) {
    ev.preventDefault();
    console.log(this.refs.email.getValue());
    console.log(this.refs.Password.getValue());
    console.log(this.refs.name.getValue());
    // let currentuser = firebase.auth.currentuser;
    // console.log(currentuser.uid)
    let name = this.refs.name.getValue();
    let email = this.refs.email.getValue();
    let password = this.refs.Password.getValue();
    firebase.auth().createUserWithEmailAndPassword(email, password)

      .then((user) => {
        let userDetails = {
          useremail: user.email,
          username: name,
          blood: this.state.blood
        }
        

        firebase.database().ref('users/' + user.uid).set(userDetails)
browserHistory.push('/login')

      })

  }
  render() {

    return (
      <div>
        <h1 className="text-center">signup</h1>
        <MuiThemeProvider>
          <div className="form">
            <form onSubmit={this.signup.bind(this)}>
              <TextField hintText="Name" ref="name" /> <br />
              <br />
              <TextField hintText="Email" ref="email" /> <br />
              <br />
              <TextField type="password" hintText="Password" ref="Password" /> <br />
              <br />
              <div>
                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange.bind(this)}>
                  {this.state.bloods.map((v, i) => {
                    return (
                      <MenuItem value={v} key={i} primaryText={v} />
                    )
                  })}
                </DropDownMenu>
              </div>

              <RaisedButton type="submit" label="Signup" primary={true} />
              {/*<button className="btn-primary rounded">signup</button>*/}
              <Link to="/login"><p>Already have an account?</p></Link>
            </form>
          </div>
        </MuiThemeProvider>

        <div className="form">

        </div>

      </div>

    )
  }
}
injectTapEventPlugin()

export default Signup;

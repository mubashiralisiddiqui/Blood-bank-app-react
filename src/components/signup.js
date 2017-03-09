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
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
// import DropDownMenuSimpleExample from './dropdown'
injectTapEventPlugin()
// import Home from "./home";
class Signup extends React.Component {
  // 
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
//   this.state = {value: 1,blood:'',
//     bloods: ['A+','B+','AB+','O+','A-','B-','AB-','O-']
      
// };
    
//   }

//     handleChange = (event, index, value) =>{ this.setState({value});
//         var blood =  event.target.childNodes[0].nodeValue;    
//                 console.log(blood);
//                 this.setState({blood: blood})
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
     let bloodgroup = this.refs.bg.getValue();
     console.log(bloodgroup);

    //  let currentUser = firebase.auth().currentUser;
      var userId = firebase.auth().currentUser.uid;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)

      .then((user) => {
        let userDetails = {
          useremail: user.email,
          username: name,
           blood: bloodgroup

        }
        browserHistory.push('/login')

      firebase.database().ref('users/' +userId ).set(userDetails)
// firebase.database().ref('users/bloodgroup/').push({userDetails})

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
             <TextField hintText="bloodgroup" ref="bg" /> <br />
            <TextField hintText="Email" ref="email" /> <br />
            <br />
            <TextField type="password" hintText="Password" ref="Password" /> <br />
            <br />
            <div>
              
             {/*<DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange.bind(this)}>
         {this.state.bloods.map((v,i)=>{
             return(
                <MenuItem value={v} key={i} primaryText={v} />
             )
         })}  
      </DropDownMenu>*/}
            </div>
        
               <RaisedButton  type="submit" label="Signup" primary={true} />
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


export default Signup;

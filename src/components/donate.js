import React from 'react';
// import { Link } from 'react-router';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenuSimpleExample from './dropdown'


// import Home from "./home";
class Donate extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>

         <div>
          <AppBar
            title="Donate Blood"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
           <div className="form">
             <h4>User Detail</h4>
          <form>
            <TextField hintText="Name" ref="name" /> <br />
            <br />
            <TextField hintText="Email" ref="email" /> <br />
            <br />
            <TextField type="password" hintText="Password" ref="Password" /> <br />
            <br />
          </form>
          
        </div>
           </div>
        </MuiThemeProvider>
         <div className="form">
          <form>
            {/*<TextField hintText="Name" ref="name" /> <br />*/}
            {/*<br />
            <TextField hintText="Email" ref="email" /> <br />
            <br />
            <TextField type="password" hintText="Password" ref="Password" /> <br />
            <br />

               <RaisedButton  type="submit" label="Signup" primary={true} />*/}
              {/*<button className="btn-primary rounded">signup</button>*/}
              
          </form>
        </div>
      </div>

    )
  }
}

export default Donate;

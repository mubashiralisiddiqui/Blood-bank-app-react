import React from 'react';
//import logo from './logo.svg';
import '../App.css';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

// import Signup from './signup'
// import Signup from './signup';

// import Login from './login';
import { Link } from 'react-router'
var config = {
  apiKey: "AIzaSyCpyzTcipruNtx6tlYuUoOGRmrzyAf6meo",
  authDomain: "authenticationsignup-5ca1a.firebaseapp.com",
  databaseURL: "https://authenticationsignup-5ca1a.firebaseio.com",
  storageBucket: "authenticationsignup-5ca1a.appspot.com",
  messagingSenderId: "598973496584"
};
firebase.initializeApp(config);
const style = {
  margin: 12,
};

class App extends React.Component {


  render() {
    return (
      
        < MuiThemeProvider>
        <div>
          <AppBar
            title="BloodBank"iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          {/*<h1>Blood Blank </h1>*/}
        
       

        <Link to="/signup"> <RaisedButton label="Signup" primary={true} style={style} /></Link>
       
        <Link to="/login"><RaisedButton label="Login" primary={true} style={style} /></Link>
        {this.props.children}
      </div>
   </MuiThemeProvider>


        
    )

  }
}
export default App;



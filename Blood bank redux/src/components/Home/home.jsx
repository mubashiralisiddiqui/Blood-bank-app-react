import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import firebase from 'firebase';
// import {connect}from 'react-redux';
import {connect}from 'react-redux'
import {signup} from '../../actions/authaction'

import {Link} from 'react-router';
class Home extends Component {
constructor(props){
  super(props);
  
} 
  
  componentWillMount() {
    console.log(this.props.SignUp)
    
  }
  
  render() {
   console.log('auht------------',this.props.authAtatus.email)
    return (
      <div className="App">
        <Link to ="/donateblood"><RaisedButton  label="Donate Blood" secondary={true} style={{margin: 12, backgroundColr:"pink"}} /></Link>
       <Link to ="/Requiredblood"> <RaisedButton  label="Required Blood" secondary={true} style={{margin: 12, backgroundColr:"pink"}} /></Link>

        <h1>Hello home</h1>        
      
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return{
//     auth: state.AuthReducer
//   }
// }
// function mapDispatchToProps(dispatch){
// return{
//   signin:(userSignin)=>{
//    dispatch(SignIn(userSignin));
//   }
// }
// }

const mapStateToProps =(state) =>{
    return{
        authAtatus: state.AuthReducer.authSignInData
    };
}
// const mapDispatchToProps =(dispatch) =>{
//     return{
//         SignUp: (userSignUp) =>{
//             dispatch(signup(userSignUp));
//         }
//     };
// }
export default connect(mapStateToProps)(Home);

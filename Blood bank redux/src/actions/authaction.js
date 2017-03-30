import action from '../reducers/authReducer'
import * as  firebase from 'firebase'
import {browserHistory}from'react-router'
import actionTypes from '../reducers/actionTypes';

export function signup(usersignup){
  return dispatch=>{
      dispatch (newUserAction)
      firebase.auth().createUserWithEmailAndPassword(usersignup.email,usersignup.password)

      .then((user) => {
        let userDetails = {
          useremail: usersignup.email,
        }
        browserHistory.push('/login')
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+ userId).set(userDetails)

        // firebase.database().ref('users/bloodgroup/').push({userDetails})

      })

  }
}
export function SignIn(userSignIn){
    return dispatch =>{
        firebase.auth()
            .signInWithEmailAndPassword(userSignIn.email, userSignIn.password)
            .then((user) => {
                dispatch(signInUpdate());
                // console.log(user);
                browserHistory.push('/home');
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                // var errorMessage = "The email address or password you entered is not valid";
                console.log(errorMessage);
            });
    }
}
export function signOut(){
 return dispatch=>{     
        firebase.auth().signOut()
        .then(function() {
            dispatch(signInUpdate());
            browserHistory.push('/signin');
        }).catch(function(error) {
            console.log('Server error');
        });
    }   
}
function signInUpdate(){
    return{
        type: actionTypes.SiginUpadte
    }
}
function newUserAction(){
  return{
      type:actionTypes. GetUserInfo
  }
}
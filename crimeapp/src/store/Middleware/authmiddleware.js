import AuthAction from '../actions/authaction';
import * as firebase from 'firebase';
import {browserHistory}from 'react-router';
export default class AuthMiddleware {

    static signup(userinput) {
        return dispatch => {
            console.log("test ", userinput);
            firebase.auth().createUserWithEmailAndPassword(userinput.email, userinput.password)
                .then((authuser) => {
                    let user = {
                        userid: authuser.uid,
                        email: userinput.email,
                        name: userinput.name
                    }
                    firebase.database().ref('/').child(`users/${user.userid}`).set(user)
                        .then(() => {
                            dispatch(AuthAction.signupsuccessful("Signupsuccessfull"))
                        })
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode)
                    dispatch(AuthAction.signupsfailed(errorMessage))
                    // ...
                });
        }
    }

    static signin(userinput) {
        return dispatch => {
            firebase.auth()
                .signInWithEmailAndPassword(userinput.email, userinput.password)
                .then((user) => {
                    var userId = firebase.auth().currentUser.uid;
                    firebase.database().ref('users/' + userId).on('value', (data) => {
                        var obj = data.val();
                        console.log(obj)
                        dispatch(AuthAction.login(obj));
                    })
                    
                    // console.log(user);
                    browserHistory.push('/');
                })

                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    // var errorMessage = "The email address or password you entered is not valid";
                    console.log(errorMessage);
                    dispatch(AuthAction.loginfailed(errorMessage))
                    
                });
        }
    }
    static  signOut() {
    return dispatch => {
        firebase.auth().signOut()
            .then(function () {
                // dispatch(signInUpdate());
                browserHistory.push('/');
            }).catch(function (error) {
                console.log('Server error');
            });
    }
}
}

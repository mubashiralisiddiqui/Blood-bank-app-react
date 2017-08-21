
import * as  firebase from 'firebase'
import { browserHistory } from 'react-router'
import actionTypes from '../reducers/actionTypes';

export function signup(usersignup) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(usersignup.email, usersignup.password)
            .then((user) => {
                let userDetails = {
                    useremail: usersignup.email,
                    name: usersignup.name
                }
                browserHistory.push('/login')
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('users/' + userId).set(userDetails)
                firebase.database().ref('users/' + userId).on('value', (data) => {
                    var obj = data.val();
                })
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                // var errorMessage = "The email address or password you entered is not valid";
                alert(errorMessage);
            });
    }
}
export function SignIn(userSignIn) {
    return dispatch => {
        firebase.auth()
            .signInWithEmailAndPassword(userSignIn.email, userSignIn.password)
            .then((user) => {
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('users/' + userId).on('value', (data) => {
                    var obj = data.val();
                    dispatch(signInUpdate(obj));
                })
                browserHistory.push('/home');
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                // var errorMessage = "The email address or password you entered is not valid";
                alert(errorMessage);
            });
    }
}
export function signOut() {
    return dispatch => {
        firebase.auth().signOut()
            .then(function () {
                browserHistory.push('/');
            }).catch(function (error) {
                alert(error)
            });
    }
}
function signInUpdate(payload) {
    return {
        type: actionTypes.SiginUpadte,
        payload
    }
}
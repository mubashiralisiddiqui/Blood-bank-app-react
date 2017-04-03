import * as  firebase from 'firebase'
import {browserHistory}from'react-router'
import actionTypes from '../reducers/actionTypes';

export function submit(donordetails){
  return dispatch=>{
      dispatch (newUserAction)
      firebase.database().ref().child('Bloodgroup/'+donordetails.blood+'/').push(donordetails)
    alert("thanks for your input")
    
    
    browserHistory.push('/home')}
  }

function newUserAction(){
  return{
      type:actionTypes. GetDonorInfo
  }
}
// import action from '../reducers/authReducer'
import * as  firebase from 'firebase'
import {browserHistory}from'react-router'
import actionTypes from '../reducers/actionTypes';

export function submit(donordetails){
  return dispatch=>{
      dispatch (newUserAction)
      firebase.database().ref('Bloodgroup/'+donordetails.blood+'/').push(donordetails)
    alert("thanks for your input")
    
    
    browserHistory.push('/home')}
  }

//   export function donorsubmit(){
//   return dispatch=>{
      
    
//      firebase.database().ref('Bloodgroup/').on('value', (data) => {
//             var obj = data.val();
//             console.log("firebasedatat------",obj)
//             dispatch(Donoraction(obj))
//         })
//   }
//   }


// function Donoraction(donordata){
//   return{
//       type:actionTypes. AllDonorInfo,
//       donordata
//   }
// }
function newUserAction(){
  return{
      type:actionTypes. GetDonorInfo
  }
}
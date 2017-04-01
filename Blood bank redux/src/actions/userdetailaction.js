import * as firebase from 'firebase';
import actionTypes from '../reducers/actionTypes';
export function check() {
  return dispatch => {

    console.log("thanks for your input")
    firebase.database().ref('Bloodgroup/').once('value', (data) => {
      var obj = data.val();
      var arr = [];
      
      for(var a in obj){
          for(var b in obj[a]){
            arr.push(obj[a][b]);
          }    
      }
      console.log(obj)//every thing is ok till this line data is retrieve
      dispatch(newdonoraction(arr))
    })

  }
}
function newdonoraction(donorinfo) {
  return {
    type: actionTypes.AllDonorInfo,
    donorinfo
  }
}
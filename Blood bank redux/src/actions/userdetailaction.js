import * as firebase from 'firebase';
import actionTypes from '../reducers/actionTypes';

export function takeBlood(bloodgroup) {
  return dispatch => {
    console.log("your userdetatilaction is working properly")
    console.log(bloodgroup)
    var arr = [];
    var donors = []
    switch (bloodgroup) {
      case "A+":
        donors.push(['A+', 'O+', 'A-', 'O-']);
        break;
      case "B+": {
        donors.push(['B+', 'O+', 'B-', 'O-']);
        break;
      }
      case "AB+": {
        donors.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
        break;
      }
      case "O+": {
        donors.push(['O+', 'O-']);
        break;
      }
      case "A-": {
        donors.push(['A-', 'O-']);
        break;
      }
      case "B-": {
        donors.push(['B-', 'O-']);
        break;
      }
      case "AB-": {
        donors.push(['AB-', 'O-', 'A-', 'B-']);
        break;
      }
      case "O-": {
        donors.push(['O-']);
        break;
      }
    }
    donors.map((val, index) => {
      return val.map((v, i) => {
        return (
          firebase.database().ref().child('Bloodgroup/' + v + '/').on('value', (data) => {
            var obj = data.val();
            for (var prop in obj) {
              arr.push(obj[prop]);
            }
          })
        )
      })
    })
    dispatch(newdonoraction(arr))
  }
}
function newdonoraction(donorinfo) {
  return {
    type: actionTypes.AllDonorInfo,
    donorinfo
  }
}


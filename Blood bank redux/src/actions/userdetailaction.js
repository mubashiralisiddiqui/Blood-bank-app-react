import * as firebase from 'firebase';
import actionTypes from '../reducers/actionTypes';


//   // for(var a in obj){
//   //     // for(var b in obj[a]){
//   //       // arr.push(obj[a][b]);
//   //        arr.push(obj[a])
//   //     // }    
//   // }



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

            console.log(obj)

            for (var prop in obj) {

              arr.push(obj[prop]);
              console.log(arr);

            }
          })
        )
      })
    })
    dispatch(newdonoraction(arr))
    // firebase.database().ref().child('Bloodgroup/'+bloodgroup+'/').on('value', (data) => {
    //       var obj = data.val();

    // var a = bloodgroup
    // for(var bg in obj){
    //   arr.push(obj[bg])
    // }

    // for(var a in obj){
    // for(var b in obj[a]){
    // arr.push(obj[a][b]);
    //  arr.push(obj[a])
    // }    
  }
  // console.log(obj)//every thing is ok till this line data is retrieve

  // })

  // console.log("hello")

}


function newdonoraction(donorinfo) {
  return {
    type: actionTypes.AllDonorInfo,
    donorinfo
  }
}


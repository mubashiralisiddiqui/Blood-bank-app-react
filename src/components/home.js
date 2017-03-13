import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.state = {
            array: [],
            donors: []

        };
        // console.log(this.state.array)

    }

    componentDidMount() {


        //  let _self = this;
    
        // let ref = firebase.database().ref("/users");
        // let _self = [];
        // ref.once('value', function (snapshot) {
        //     var obj=  snapshot.val();
        //     console.log(obj)
            // snapshot.forEach(childSnapshot => {
            //     _self.push(childSnapshot.val())
            // })
            
            // _self.setState({
            //     array: _self.arr
            // })
        // });
        var userId = firebase.auth().currentUser.uid;
      //   retrieve data by signup page
        firebase.database().ref('users/'+userId).on('value', (data) => {
            var obj = data.val();
            console.log(obj)//every thing is ok till this line data is retrieve
            let dbarray = [];
           for(var prop in obj){
                dbarray.push(obj[prop]);
                console.log(dbarray);
                this.setState({
                    array: dbarray
                })
                console.log(this.state.array);

            }
            })
          

        // })
        // Donor detail retrive by firebase
        // firebase.database().ref('donors/' + userId).on('value', (data) => {
        //     var obj = data.val();
        //     // console.log(obj)//every thing is ok till this line data is retrieve
        //     let donorarray = [];
        //     donorarray.push(Object.keys(obj))
        //     console.log(donorarray);
        //     this.setState({
        //         donors: donorarray
        //     })
        // })



    }
    logout(ev) {
        ev.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log('Sign-out successful.')

            browserHistory.push('/app')
        }, function (error) {
            // An error happened.
        })
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar title="Blood Bank"
                        iconElementRight={<FlatButton onClick={this.logout} label="Logout" />}
                    // iconClassNameRight="muidocs-icon-navigation-expand-more"

                    />

                </MuiThemeProvider>

                <div>

                    {/*{this.state.array.map((val, i) => {
                        return (<p key={i} style={{ float: "right" }}>user:{val}</p>)
                    })}*/}
                    {this.state.array.map((val, i) => {
                        return <li key={i}>{val}</li>
                    })}
                </div>
                {/*<div>
                    {this.state.array.map((val, i) => {
                        return (<li key={i} style={{ float: "right" }}>country:{val}</li>)
                    })}
                </div>*/}

                {/*<option ref="o">O</option>

                    <option ref="a">A+</option>
                    <option ref="b">B+</option>
                    <option ref="an">A-</option>
                    <option ref="ap">A+</option>*/}
                <br />
                {/*<div>
                    {this.state.array.map((val, i) => {
                        return (<div key={i}><li >{val.username}</li></div>)
                    })}
                </div>*/}
                <Link to="/donate"><button>Donate Blood</button></Link>
                 <Link to="/donordetail"><button>Requird Blood</button></Link>

                {/*{this.state.donors.map((val)=>{
                  return <li>{val}</li>
              })}*/}
            </div>
        )
    }
}

export default Home; 
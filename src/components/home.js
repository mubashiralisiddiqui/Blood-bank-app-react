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
        // this.demo=this.demo.bind(this);
        // let arr =[]/
        this.state = { array: [] };
        // console.log(this.state.array)

    }

    componentDidMount(){


        var userId = firebase.auth().currentUser.uid;

    //  var stores = [];

        firebase.database().ref('users/'+userId).on('value', (data)=>{
            var obj = data.val();
            console.log(obj)//every thing is ok till this line data is retrieve
              
            //   let alldata = this.props.users;
            //   console.log(alldata)
            //   /alldata=alldata.concat(obj);
            //   console.log(alldata)
            let dbarray=[];
            dbarray.push(obj)
            console.log(dbarray);


            // for(var prop in obj)
            // stores.push(obj[prop]);
            // console.log(stores);
            // console.log(this.state.array)
            this.setState({
                array: dbarray
            })
        })

    




        // var starCountRef = firebase.database().ref('users/' + userId);
        // starCountRef.on('value', function (snapshot) {
        //     (snapshot.val());
        //     console.log(snapshot.val())
        //     let dbarray=[];
        //     dbarray.push(snapshot.val().username)
        //     console.log(this.state.array)
        //     this.setState({
        //         array:dbarray
        //     })
        // });






        //    return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
        //         var username = snapshot.val();
        //         let dbarray =[];
        //         dbarray.push(username)
        //         console.log(username)
        //         console.log( this.state.array)

        //    this.setState({
        //        array: dbarray
        //    })

        // console.log(a)
        // console.log(this.state.array);


        // this.setState({
        //     array: dbarray

        // })
        // });

        //     firebase.database().ref('users/' + userId).once('child_added', (data) => {
        //         let obj = data.val();
        //         console.log("firebasedata", obj.useremail, obj.username);
        //         let dbarray = [];


        //         dbarray.push(obj)
        //         console.log(dbarray)
        //         console.log(this.state.array)
        //         this.setState({
        //             array: dbarray

        //         })
        //     })


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

                        // iconClassNameRight="muidocs-icon-navigation-expand-more"
                        iconElementRight={<FlatButton onClick={this.logout} label="Logout" />}
                    />

                </MuiThemeProvider>

                 <div>
                    {this.state.array.map((val, i) => {
                        return (<p key={i} style={{float:"right"}}>user:{val.username}</p>)
                    })}
                </div>

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

                
            </div>
        )
    }
}

export default Home; 
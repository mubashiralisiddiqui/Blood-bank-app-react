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
        this.state = {

            array: []

        };
    }

    componentWillMount() {

        var userId = firebase.auth().currentUser.uid;

        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
            var username = snapshot.val();
            console.log(username)
            let dbarray = [];


            dbarray.push(username)
            console.log(dbarray)
            console.log(this.state.array);
            this.setState({
                array: dbarray

            })
        });

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



                {/*<option ref="o">O</option>

                    <option ref="a">A+</option>
                    <option ref="b">B+</option>
                    <option ref="an">A-</option>
                    <option ref="ap">A+</option>*/}
                <br />
                <div>
                    {this.state.array.map((val, i) => {
                        return (<div key={i}><li >{val.username}</li></div>)
                    })}
                </div>
                <Link to="/donate"><button>Donate Blood</button></Link>

                <div>
                    {this.state.array.map((val, i) => {
                        return (<tr><td key={i} >{val.username}{val.useremail}{val.blood}</td></tr>)
                    })}
                </div>
            </div>
        )
    }
}

export default Home; 
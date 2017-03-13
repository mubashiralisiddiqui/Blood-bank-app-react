import React from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';




class DonorDetails extends React.Component{

  
    constructor(props) {
        super(props);

        // this.logout = this.logout.bind(this);
        this.state = { array: [] };

    }
    componentDidMount() {


        // var userId = firebase.auth().currentUser.uid;

        firebase.database().ref('users/').on('value', (data) => {
            var obj = data.val();
            // console.log(obj)//every thing is ok till this line data is retrieve
            let dbarray = [];
            for (var prop in obj)
                dbarray.push(obj[prop])
            console.log(dbarray);
            this.setState({
                array: dbarray
            })
        })
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
            <MuiThemeProvider>
                <div>
                    <AppBar title="Blood Bank"

                        // iconClassNameRight="muidocs-icon-navigation-expand-more"
                        iconElementRight={<FlatButton onClick={this.logout} label="Logout" />}
                    />
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Bloo Group</TableHeaderColumn>
                                <TableHeaderColumn>Moreinfo</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {this.state.array.map((val, i) => {
                                return (
                                    <TableRow>
                                        <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                        <TableRowColumn key={i}>{val.username}</TableRowColumn>
                                        <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                         <TableRowColumn key={i}><Link to =""><button>Request</button></Link></TableRowColumn>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>

        )
    }

}
export default DonorDetails;
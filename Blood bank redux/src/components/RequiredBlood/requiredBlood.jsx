/*import {connect}from 'react-redux'

import React from 'react'
import {userdetails} from '../../actions/userdetailaction'
class RequiredBlood extends React.Component{
    constructor(props){
        super(props);
        this.fire = this.fire.bind(this)
    }
     fire(){
         let dummy='bhand';
         this.props.userdetails(dummy)
     }
    render(){
        console.log(this.props.donors)
        return(
            <div>
                <button onClick={this.fire}>data</button>
                <h1>RequiredBlood firebase remaining

                </h1>
            </div>
        )
    }
}

// const mapStateToProps =(state) =>{
//     return{
//         donors: state.donatedetailsreducer.donor
//     };
// }
const mapDispatchToProps = (dispatch) =>{
    return{
        userdetails: (dummy) =>{
            dispatch(userdetails(dummy));
        }
    };
}
export default connect(mapDispatchToProps)(RequiredBlood);
*/

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
// import {signup} from '../../actions/authaction'
import { check } from '../../actions/userdetailaction'

import { Link } from 'react-router';
class Requiredblood extends Component {
    constructor(props) {
        super(props);
        this.checkfunc = this.checkfunc.bind(this);
    }
    checkfunc() {
        this.props.SignUp()
        console.log(this.props.donorInfo)
    }

    render() {
        //    console.log('auht------------',this.props.authAtatus.name)
        return (
            <div className="App">
                {/*<Link to ="/donateblood"><RaisedButton  label="Donate Blood" secondary={true} style={{margin: 12, backgroundColr:"pink"}} /></Link>*/}
                <Link to="/Requiredblood"> <RaisedButton label="Required Blood" secondary={true} style={{ margin: 12, backgroundColr: "pink" }} onClick={this.checkfunc} /></Link>
                {/*{this.props.authAtatus.name}*/}
                <h1>Hello home</h1>
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
                        {this.props.donorInfo.map((val, i) => {
                            console.log("donorInfo----------",val);
                            
                            return (
                                <TableRow key={i}>
                                    <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.Country}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.age}</TableRowColumn>
                                    <TableRowColumn key={i}><Link to=""><button>Request</button></Link></TableRowColumn>
                                </TableRow>

                            )
                        })}
                    </TableBody>
                </Table>
                 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        donorInfo: state.donatedetailsreducer.donor,
       
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: () => {
            dispatch(check());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Requiredblood);

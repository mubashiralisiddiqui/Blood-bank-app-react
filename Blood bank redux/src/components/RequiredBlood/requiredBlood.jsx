
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { takeBlood } from "../../actions/userdetailaction"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router'

class Requiredblood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            blood: '',
        }
    }
    handleBgroup(e, key) {
        e.preventDefault();
        this.setState({
            value: key + 1,
        })
        var bloodg = e.target.childNodes[0].nodeValue;
        this.props.TakeBlood(bloodg)
    }
    render() {
        return (
            <div className="App">
                <Link to="/home">
                    <RaisedButton
                        label="Back"
                        secondary={true}
                        style={{ float: "right", marginRight: "20px", backgroundColr: "pink" }}
                    />
                </Link>
                <br /><br /><br />
                <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} ref="blood" style={{ width: 200 }} required="required">
                    <MenuItem style={{ color: "red" }} value={1} primaryText="Select Blood Group" disabled />
                    <MenuItem value={2} primaryText="A+" />
                    <MenuItem value={3} primaryText="B+" />
                    <MenuItem value={4} primaryText="AB+" />
                    <MenuItem value={5} primaryText="O+" />
                    <MenuItem value={6} primaryText="O-" />
                    <MenuItem value={7} primaryText="AB-" />
                    <MenuItem value={8} primaryText="B-" />
                    <MenuItem value={9} primaryText="A-" />
                </DropDownMenu>
                <br />
                <h1>Donor Info</h1>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHeaderColumn style={{ color: "red" }}>ID</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "red" }}>Name</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "red" }}>Country</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "red" }}> Area</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "red" }}>city</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "red" }}>Bloo Group</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "red" }} >Mobile num</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "red" }}>weight</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.donorInfo.map((val, i) => {
                            console.log(val)
                            return (
                                <TableRow key={i}>
                                    <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.name}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.Country}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.area}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.city}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.mobilenum}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.weight}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        donorInfo: state.donatedetailsreducer.donor,
    }
}
function mapDispatchToProps(dispatch) {
    console.log(dispatch)
    return {
        TakeBlood: (userSignin) => {
            dispatch(takeBlood(userSignin));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Requiredblood)


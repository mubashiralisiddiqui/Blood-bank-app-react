import React from 'react';
// import { Link } from 'react-router';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenuSimpleExample from './dropdown'


// import Home from "./home";
class Donate extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this)
    this.state = {
      value: 1,
      blood: '',
      gender: ''
    }

  }

  submit(e) {
    e.preventDefault();
    let Country = this.refs.Country.getValue();
    let city = this.refs.city.getValue();
    let area = this.refs.area.getValue();
    // let gender = this.refs.gender.getValue();
    let weight = this.refs.weight.getValue();
    let age = this.refs.weight.getValue();
    let mobilenum = this.refs.mobnum.getValue();
     let blood = this.state.blood;

    console.log(Country, city, blood, weight, mobilenum, area, age)
    let donordetails = {
      city: city,
      Country: Country,
      // gender: this.state.gender,
      blood:this.state.blood,
      weight: weight,
      age: age,
      mobilenum: mobilenum,
      area: area
    }
    // var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('Bloodgroup/'+this.state.blood+'/').push(donordetails)
    alert("thanks for your input")
    browserHistory.push('/home')
  }
  // handlegender(e,key){
  //    e.preventDefault();
  //    this.setState({value:key+1})
  // }
  handleBgroup(e, key) {
    e.preventDefault();
    this.setState({
      value: key + 1,
      blood: e.target.childNodes[0].nodeValue
      
    })
    console.log(this.state.blood)

  }
  render() {
    return (
      <div>
        <MuiThemeProvider>

          <div>
            <AppBar
              title="Donate Blood"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <div className="form">
              <h4>Donor Details</h4>
              <form onSubmit={this.submit}>
                <TextField hintText="Country" ref="Country" /> <br />
                <br />
                <TextField hintText="city" ref="city" /> <br />
                <br />
                <TextField type="text" hintText="Area" ref="area" /> <br />
                <br />

                {/*<TextField type="text" hintText="Gender" ref="gender" /> <br />*/}
                <br />

                <TextField type="number" hintText="weight" ref="weight" /> <br />
                <br />
                <TextField type="number" hintText="age" ref="age" /> <br />
                <TextField type="number" hintText="mobilenumber" ref="mobnum" /> <br />
                <br />
                <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} ref="blood" style={{ width: 200 }} required="required">
                  <MenuItem value={1} primaryText="Blood Group" disabled />
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
                {/*<DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} ref="blood" style={{ width: 200 }} required="required">
                  <MenuItem value={1} primaryText="Gender" disabled />
                  <MenuItem value={2} primaryText="Male" />
                  <MenuItem value={3} primaryText="Female" />

                </DropDownMenu>*/}

                <RaisedButton type="submit" label="Submit" primary={true} />
              </form>

            </div>
          </div>
        </MuiThemeProvider>
      </div>




    )
  }
}

export default Donate;

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import{connect}from 'react-redux';
import {submit} from '../../actions/firebaseaction'

class DonateBlood extends React.Component {

  constructor(props) {
    super(props);
    this.submit=this.submit.bind(this)
    this.state={
      value: 1,
      blood:'',
    }
  }

  submit(e) {
    e.preventDefault();
    let Country = this.refs.Country.getValue();
    let city=this.refs.city.getValue();
    let area=this.refs.area.getValue();
    // let gender = this.refs.gender.getValue();
    let weight=this.refs.weight.getValue();
    let age=this.refs.weight.getValue();
    let mobilenum=this.refs.mobnum.getValue();
     let blood=this.state.blood;
    let name=this.refs.name
    // console.log(Country, city, blood, weight, mobilenum, area, age)
    let donordetails={
      name:name,
      city: city,
      Country: Country,
      blood:this.state.blood,
      weight: weight,
      age: age,
      mobilenum: mobilenum,
      area: area
    }
    this.props.Submit(donordetails)
  }
 
  handleBlgroup(e, key) {
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
            <div className="form">
              <h4>Donor Details</h4>
              <form onSubmit={this.submit}>
                 <TextField hintText="Name" ref="name" /> <br /><br/>
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
                <DropDownMenu value={this.state.value} onChange={this.handleBlgroup.bind(this)} ref="blood" style={{ width: 200 }} required="required">
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
                
                <RaisedButton type="submit" label="Submit" primary={true} />
                <br/>
                <br/>
              </form>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    auth: state.AuthReducer
  }
}
function mapDispatchToProps(dispatch){
return{
  Submit:(userSignin)=>{
   dispatch(submit(userSignin));
  }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(DonateBlood);


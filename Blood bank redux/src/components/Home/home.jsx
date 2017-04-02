import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect}from 'react-redux'
import {check} from '../../actions/userdetailaction'

import {Link} from 'react-router';
class Home extends Component {
constructor(props){
  super(props);
} 
  
  render() {
    return (
      <div className="App">
        <Link to="/donateblood"><RaisedButton  label="Donate Blood" secondary={true} style={{margin: 12, backgroundColr:"pink"}} /></Link>
       <Link to="/Requiredblood"> <RaisedButton  label="Required Blood" secondary={true} style={{margin: 12, backgroundColr:"pink"}} /></Link>
       {this.props.authAtatus.name}
        <h1>Hello home</h1>        
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        authAtatus: state.AuthReducer.authSignInData
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        SignUp: ()=>{
            dispatch(check());
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);

import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'

class Main extends Component {
  render() {
    const style = {
      height: 270,
      width: 400,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <div className="App">
        <h1>Home</h1>
        <Paper style={style} zDepth={1} >
          <TextField
            hintText="Family No."
            floatingLabelText="Search Family"
            ref="number"
          />
          <RaisedButton
            label="Search"
            primary={true}
            style={{ margin: 12 }}
          />
          <br />
          <TextField
            hintText="Child No."
            floatingLabelText="Search Child"
            ref="number"
          />
          <RaisedButton
            label="Search"
            primary={true}
            style={{ margin: 12 }}
          />
          <br /><br />
          <Link to="/AddFamily">
            <RaisedButton
              label="Add Family"
              primary={true} style={{ margin: 12 }}
            />
          </Link>
          <RaisedButton label="Add Child" primary={true} style={{ margin: 12 }} />
        </Paper>
      </div>
    );
  }
}
export default Main;

import React from 'react';
import * as  MUI from 'material-ui';
import './filereport.css';
import { Link } from 'react-router'
class ReportFile extends React.Component {
  constructor() {
    super()
    this.state = {
      reportType: '',
      city: ''
    }
    this.handleReportChange = this.handleReportChange.bind(this)
    this.missingpersonfield=this.missingpersonfield.bind(this)
  }
  handleReportChange = (event, index, value) => {
    this.setState({ reportType: value });
  }
  handlecityChange(event, index, value) {
    this.setState({
      city: value
    })
  }
  missingpersonfield() {
    const field = (
      <div>
        <MUI.TextField primaryText="Name" floatingLabelText="Name" />
        <MUI.TextField primaryText="Adress" floatingLabelText="Adress" />
        
         <MUI.DatePicker
          ref="dateSinceMissing"
          hintText="Date Since Missing"
          floatingLabelText="Date Since Missing"
          value={this.state.dateSinceMissing}
          onChange={this.handleChangeInDate}
          fullWidth={true} />
        

        <MUI.TextField primaryText="Identity" />

      </div>
    );
    return field
  }
  crimeform(reportType) {
    if(reportType!== 'Missing_Person'){
    const crime = (<div>
             <MUI.TextField primaryText="crimelocation" floatingLabelText="crimelocation" />
             <MUI.TextField primaryText="crime date/time" floatingLabelText="crime date/time" />
        
            </div>
            
    );
return crime  
}
else{
  return this.missingpersonfield()
}
  }
  render() {

    return (
      <div className="reportfile">
        <MUI.Paper >
          <h3 >File A Report</h3>
          <MUI.Divider />
          <form>
            {console.log(this.state.reportType)}
            <MUI.SelectField
              ref="reportType"
              floatingLabelText="Report Type"
              value={this.state.reportType}
              fullWidth={true}
              autoWidth={true}
              onChange={this.handleReportChange.bind(this)}>
              <MUI.MenuItem key="complaint" value="Complaint" primaryText="Complaint" />
              <MUI.MenuItem key="crime" value="Crime" primaryText="Crime" />
              <MUI.MenuItem key="missingperson" value="Missing_Person" primaryText="Missing Person" />
            </MUI.SelectField>
            <MUI.SelectField
              ref="city"
              floatingLabelText="City"
              value={this.state.city}
              onChange={this.handlecityChange.bind(this)}

              fullWidth={true}
              autoWidth={true}
            >
              <MUI.MenuItem key="Karachi" value="karachi" primaryText="karachi" />
              <MUI.MenuItem key="hyderabad" value="hyderabad" primaryText="hyderabad" />
              <MUI.MenuItem key="larkana" value="larkan" primaryText=" larkan" />
              <MUI.MenuItem key="nawabshah" value="nawabshah" primaryText="nawabshah" />
              <MUI.MenuItem key="sukkur" value="sukkur" primaryText="sukkur" />

            </MUI.SelectField>
            {this.crimeform(this.state.reportType)}
            <div>
              <Link to="/">
                <MUI.RaisedButton label="Cancel" />
              </Link>

              <MUI.RaisedButton label="Save"


                primary={true} />
            </div>
          </form>

          <div />
        </MUI.Paper>
      </div>
    )
  }
}
export default ReportFile;
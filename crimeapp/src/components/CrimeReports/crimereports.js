import React from 'react';
import * as MUI from 'material-ui';
// import from './';
import Face from 'material-ui/svg-icons/action/face';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import RecordVoiceOver from 'material-ui/svg-icons/action/record-voice-over';
import ActionInfo from 'material-ui/svg-icons/action/info';
class CrimeReports extends React.Component{

    render(){
        return(
            <div>
               
              <MUI.Tabs>
                  <MUI.Tab icon={<Fingerprint/>} label="crime">crime</MUI.Tab>
              
              
                  <MUI.Tab icon={<Face/>} label="Missing persons">Missing person</MUI.Tab>
                  <MUI.Tab icon={<RecordVoiceOver/>} label="complains">Complains</MUI.Tab>
       
              </MUI.Tabs>
            </div>
        )
    }
}
export default CrimeReports;
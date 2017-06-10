import React from 'react';
import * as MUI from 'material-ui'
import './dashboard.css'
import { CrimeReports, CrimeInfo } from '../../components'
import QRCode from 'qrcode.react'
import Face from './images/images.png'
class DashBoard extends React.Component {
    constructor(props) {
        super();

        this.state = {
            crime: 0,
            missingPerson: 0,
            complains: 0
        }
    }
    render() {
        return (
            <div>
                {/*<QRCode value='1243'/>*/}
                <div className="Dashboard_box" >
                    <p>{this.state.crime}</p>
                    <figure>
                        <img src={Face} width="60" height="40" alt="crime" value="crime" />


                    </figure>
                </div>
                <div className="Dashboard_box2" >
                    <p>{this.state.crime}</p>
                    <figure>
                        <img src={Face} width="60" height="40" alt="crime" value="crime" />


                    </figure>
                </div>
                <div className="Dashboard_box2" >
                    <p> {this.state.missingPerson}</p>
                    <figure>
                        <img src={Face} width="60" height="40" alt="crime" value="crime" />

                    </figure>
                </div>
                <div className="Dashboard_box3" >
                    <p> {this.state.complains}</p>
                    <figure>
                        <img src={Face} width="60" height="40" alt="crime" value="crime" />


                    </figure>

                </div>
                <MUI.SelectField
                    ref="city"
                    floatingLabelText="City"
                    value={this.state.city}
                    autoWidth={true}
                 //   onChange={this.handleCityChange.bind(this)}
                 >
                    {/*{
                        this.props.cityList.map(city => {
                            return <MUI.MenuItem key={city} value={city} primaryText={city} />
                        })
                    }*/}
                </MUI.SelectField>
                <CrimeInfo />
                <CrimeReports />
            </div>
        )
    }
}
export default DashBoard;
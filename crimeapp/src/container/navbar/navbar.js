import React from 'react';
import * as MUI from 'material-ui';
import { Link, browserHistory } from 'react-router';
import Web from 'material-ui/svg-icons/av/web';
import Assessment from 'material-ui/svg-icons/action/assessment';
import {connect} from 'react-redux';
import {AuthMiddleware} from '../../store';
class NavBar extends React.Component {
    constructor() {
        super()
        this.drawerToggle = this.drawerToggle.bind(this)
        this.renderActionButtons = this.renderActionButtons.bind(this)
        this.drawer_menu = this.drawer_menu.bind(this)
        this.state = {
            drawer: false
        }
    }
    menu_after_login(){
        return(
            <div>
             <Link to ='/reportfile'>  <MUI.MenuItem primaryText="File A Report" leftIcon={<Web/>} /></Link> 
               <MUI.MenuItem primaryText="View Report" leftIcon={<Assessment/>}/> 
            </div>
        )
    }
    drawer_menu() {
        return (
            <div>
                <MUI.MenuItem
                    primaryText="Dashboard"

                    containerElement={<Link to="/dashboard" />}
                   
                />
                
                {this.props.prop ? this.menu_after_login():null}
                
            </div>
        )
    }
    handleLogout() {
        browserHistory.push('/')
    }
    renderActionButtons() {
        const signup_loginbutton = (
            <div>
                <MUI.RaisedButton style={{ marginRight: 10 }} label="Sign In" onClick={() => { browserHistory.push('/login') }} />
                <MUI.RaisedButton style={{ marginRight: 10 }} label="Sign Up" onClick={() => { browserHistory.push('/signup') }} />
            </div>
        )
        const logout = (
            <div>
                <MUI.RaisedButton style={{ marginRight: 10 }} label="Logout" onClick={this.handleLogout} />
            </div>
        )
        // return (signup_loginbutton)
       if(this.props.prop){
      return logout;
    }
    else {
      return signup_loginbutton;
    }
    }
    drawerToggle() {
        this.setState({
            drawer: !this.state.drawer
        })
    }

    render() {

        return (
            <div>
                {/*<button  onClick={this.drawerToggle}>ok</button>*/}
                <MUI.AppBar title="Crime Reporting System"
                    //onLeftIconButtonTouchTap={ <MUI.RaisedButton style={{marginRight:10}} label="Sign In" onTouchTap={()=>this.context.router.push("/login")}/>}
                    onLeftIconButtonTouchTap={this.drawerToggle}
                    iconElementRight={this.renderActionButtons()} />
                <MUI.Drawer open={this.state.drawer} docked={false}
                    onRequestChange={this.drawerToggle}
                >
                    <h2>SIDE MENU</h2>
                    {this.drawer_menu()}

                </MUI.Drawer>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.AuthReducer.islogin
    };
}
export default connect(mapStateToProps,null)(NavBar);
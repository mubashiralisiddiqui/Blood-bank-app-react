
import React from 'react';
import AppBar from 'material-ui/AppBar';
import firebase from 'firebase';
import FlatButton from 'material-ui/FlatButton';
import { signOut } from '../../actions/authaction';
import { connect } from 'react-redux'
class AppBarExampleIcon extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: false
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                this.setState({ isLogged: true });
            } else {
                this.setState({ isLogged: false });
            }
        }.bind(this));
    }
    logout(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <center>
                    <div>
                        <AppBar
                            title="BloodBank"
                            iconStyleLeft={{ "display": "none" }}
                            style={{ "backgroundColor": "#af111c" }}
                            iconElementRight={this.state.isLogged === true ?
                                <FlatButton label="Logout" onClick={this.logout.bind(this)}
                                />
                                : void 0
                            }
                        />
                    </div>
                    {this.props.children}
                </center>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.AuthReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        Logout: (userSignin) => {
            dispatch(signOut(userSignin));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppBarExampleIcon);
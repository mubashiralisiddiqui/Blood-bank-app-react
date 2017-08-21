import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBarExampleIcon,Main,Signup,Login,Home,RequiredBlood,DonateBlood } from './components';
import './index.css';
import store from './store/configureStore'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
injectTapEventPlugin();
 var config = {
    apiKey: "AIzaSyCpyzTcipruNtx6tlYuUoOGRmrzyAf6meo",
    authDomain: "authenticationsignup-5ca1a.firebaseapp.com",
    databaseURL: "https://authenticationsignup-5ca1a.firebaseio.com",
    storageBucket: "authenticationsignup-5ca1a.appspot.com",
    messagingSenderId: "598973496584"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

      <Router history={browserHistory}>
        <Route path="/" component={AppBarExampleIcon} >
          <IndexRoute component={Signup} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/requiredBlood" component={RequiredBlood} />
          <Route path="/donateblood" component={DonateBlood} />
        </Route>
        

      </Router>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

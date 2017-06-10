import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppBarExampleIcon } from './components';
import { SignUp, NavBar, Login, Main, ReportFile,DashBoard } from './container';

import './index.css';


// import configureStore from './store/configureStore';
import store from './store'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';


// const store = configureStore();

injectTapEventPlugin();

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCDdrge9na3j6LCh1XlWD-Y-GOElBXHkfc",
    authDomain: "multimedi-40038.firebaseapp.com",
    databaseURL: "https://multimedi-40038.firebaseio.com",
    projectId: "multimedi-40038",
    storageBucket: "multimedi-40038.appspot.com",
    messagingSenderId: "756530169531"
  };
  firebase.initializeApp(config);
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={DashBoard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/reportfile" component={ ReportFile} /> 
          <Route path ="/dashboard"component={DashBoard}></Route> 
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

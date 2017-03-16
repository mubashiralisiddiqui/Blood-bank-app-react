import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signup from './components/signup';
import './index.css';
import Login from './components/login';
import Donate from './components/donate'
import Home from './components/home';
import DonorDetails from './components/donordetails'
import { Router, Route, browserHistory} from 'react-router';
import More from './components/more'

// import injectTapEventPlugin from "react-tap-event-plugin";



ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={ App}>
            {/*<IndexRoute component={App} />*/}
           
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login} />
            </Route>
            <Route path="/app" component={App}/>
            <Route path="/mubashir" component={Donate}/>
            <Route path="/home" component={Home} />
             <Route path="/donordetail" component={DonorDetails} />
              <Route path="/moredetail" component={More} />
         
       
    </Router>,

  

  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './signup';
import './index.css';
import Login from './login';
import Donate from './donate'
import Home from './home'
import { Router, Route, browserHistory} from 'react-router'



ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*<IndexRoute component={App} />*/}
           
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login} />
            </Route>
            <Route path="/app" component={App}/>
            <Route path="/donate" component={Donate}/>
            <Route path="/home" component={Home} />
         
       
    </Router>,

  

  document.getElementById('root')
);

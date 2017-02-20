import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
var express = require ("express");
var app = express();



ReactDOM.render(
  app.get("./",(req,res,next)=>{
  res.send("helloworld")
  }),
  document.getElementById('root')
);

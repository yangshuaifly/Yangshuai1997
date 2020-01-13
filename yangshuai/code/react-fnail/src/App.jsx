import React, { Component, Suspense } from "react";
import { BrowserRouter as Route, Route } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';

export default class App extends Component {
  render() {
    return (
         <Router>
           <Router path='/' exact component={Home} />
           <Router path='/login' exact component={Login} />
         </Router>
  
    );
  }
}

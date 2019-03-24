import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import Home from './components/landingPage/home';
import uploadImage from './components/uploadImage/uploadImage';
import Login from './components/login/login';
import Register from './components/register/register'
import Dashboard from './components/dashboard/dashboard'
import CreateWebsite from './components/createWebsite/createWebsite'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path = "/login" component = {Login} ></Route>
          <Route exact path = "/register" component = {Register} ></Route>
          <Route exact path = "/dashboard" component = {Dashboard} ></Route>
          <Route exact path = "/uploadImage" component = {uploadImage} ></Route>
          <Route exact path = "/createwebsite" component = {CreateWebsite} ></Route>
          <Route exact path = "/" component = {Home} ></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

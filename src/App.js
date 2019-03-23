import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import Home from './components/landingPage/home';
import uploadImage from './components/uploadImage/uploadImage';
import Login from './components/login/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path = "/login" component = {Login} ></Route>
          <Route exact path = "/uploadImage" component = {uploadImage} ></Route>
          <Route exact path = "/" component = {Home} ></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

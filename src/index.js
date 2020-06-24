import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './Screens/Register';
import RegisterPetani from './Screens/RegisterPetani';
import LoginPetani from './Screens/LoginPetani';
import Login from './Screens/Login';
import Pembiayaanpetani from './Screens/PembiayaanPetani';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import firebase from './config/firebase/index'

console.log('configurasi firebase berhasil',firebase);

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render = {props => <App {...props} /> } />
        <Route path='/login' exact render = {props => <Login {...props} /> } />
        <Route path='/login-petani' exact render = {props => <LoginPetani {...props} /> } />
        <Route path='/register' exact render = {props => <Register {...props} /> } />
        <Route path='/register-petani' exact render = {props => <RegisterPetani {...props} /> } />
        <Route path='/pembiayaan' exact render ={props => <Pembiayaanpetani {...props}/> } />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


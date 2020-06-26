import React, { Component, useState } from 'react';
import '../asset/style.css';

import { Container } from 'react-bootstrap';
import { Newnav, Myfooter } from '../Components/MyComponents';

import ic_facebook from '../asset/image/ic_facebook.svg'
import { Link, withRouter } from 'react-router-dom'
import firebase from './firebase';


function SignIn(props){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <main>
      <Newnav/>
      <Container>
        <div className="register">
          <div className="content">
              <h1>Login</h1>
              <p>Sebagai Investor</p>
              <form className="">
                <input className=''id="email" autoComplete="off" name="email" autoFocus value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                <input className=''type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}  />
                <button type='submit'className='btn-submit' onClick={login}>
                 Login
                </button>
                <div className="d-flex justify-content-center">
                  <h6>Atau</h6>
                </div>
                <button className="btn-facebook"><img src={ic_facebook} alt=""/> Login Dengan Facebook</button>
              </form>   
            </div>
        </div>
        <Myfooter/>
      </Container>
    </main>                 
  )
  
  async function login() {
    try {
      await firebase.login(email, password)
      props.history.replace('/')
    } catch(error) {
      alert(error.message)
    }
  }
}

export default withRouter(SignIn);

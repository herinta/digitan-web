import React, { Component, useState } from 'react';
import '../asset/style.css';

import { Container } from 'react-bootstrap';
import { Newnav, Myfooter } from '../Components/MyComponents';
import { Link, withRouter } from 'react-router-dom'
import ic_facebook from '../asset/image/ic_facebook.svg'
import firebase from './firebase';

function SignUp(props){

  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [NumberPhone, setNumber] = useState('')
  
  return(
    <div className=''>
      <Newnav/>
      <Container>
        <div className="register">
          <div className="content">
              <h1>Regristasi</h1>
              <p>Daftar sebagai Investor</p>
              <form className="">
                <input className=''id="name" autoComplete="off" autoFocus value={name} onChange={e => setName(e.target.value)} placeholder='Name'/>
                <input className='' id="NumberPhone" type="text" autoComplete="off" value={NumberPhone} onChange={e => setNumber(e.target.value)} placeholder='Number Phone'/>
                <input className='' placeholder="Email" id="email" name="email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)}  />
                <input className='' placeholder="Password" name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}/>
                <input className=''  id="" type='password' placeholder='Confirm Password'/>
                <button type='submit'className='btn-submit'onClick={onRegister} >
                  Daftar
                </button>
                <div className="d-flex justify-content-center">
                  <h6>Atau</h6>
                </div>
                <button className="btn-facebook"><img src={ic_facebook} alt=""/> Daftar Dengan Facebook</button>
              </form>   
            </div>
        </div>
        <Myfooter/>
      </Container>
    </div>
  )
  async function onRegister() {
    try {
      await firebase.register(name, email, password)
      await firebase.addNumberPhone(NumberPhone)
      props.history.replace('/')
    } catch(error) {
      alert(error.message)
    }
  }
}


export default withRouter(SignUp);

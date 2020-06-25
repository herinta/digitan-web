import React, { Component } from 'react';
import '../asset/style.css';

import { Container } from 'react-bootstrap';
import { Newnav, Myfooter } from '../Components/MyComponents';

import ic_facebook from '../asset/image/ic_facebook.svg'

class LoginInvestor extends Component {
  render(){
    return(
      <div className=''>
      <Newnav/>
      <Container>
        <div className="register">
          <div className="content">
              <h1>Login</h1>
              
              <form className="">
                <input className='' id="email" type='email' placeholder='Email' />
                <input className='' id="password" type='password' placeholder='Password' />
                <button type='submit'className='btn-submit'>
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
    </div>
    )
  }
}

export default LoginInvestor;

import React, { Component } from 'react';
import firebase from '../config/firebase'
import '../asset/style.css';

import { Container } from 'react-bootstrap';
import { Newnav, Myfooter } from '../Components/MyComponents';

import ic_facebook from '../asset/image/ic_facebook.svg'

class Register extends Component {
  state = {
    email: '',
    password: ''

  }
  handleChangeText = (e) => {
    // console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    })
    
  }
  handleRegisterSubmit = () => {
    const {email, password} = this.state;
    console.log('data', email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log('success', res);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
    
  }
  render(){
    return(
      <div className=''>
      <Newnav/>
      <Container>
        <div className="register">
          <div className="content">
              <h1>Regristasi</h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit, sed do eiusmod tempor incididunt ut labore et <br/>
                dolore magna </p>
              <form className="">
                <input className='' id="name" type='text' placeholder='Name'/>
                <input className='' id="numberphone" type='text' placeholder='Number Phone'/>
                <input className='' id="email" type='email' placeholder='Email' onChange={this.handleChangeText} />
                <input className='' id="password" type='password' placeholder='Password' onChange={this.handleChangeText}/>
                <input className='' id="" type='password' placeholder='Confirm Password'/>
                <button type='submit'className='btn-submit' onClick={this.handleRegisterSubmit}>
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
  }
}

export default Register;

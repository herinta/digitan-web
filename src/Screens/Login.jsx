import React, { Component } from 'react';
import '../asset/style.css';

import {Navbar, Container, Button, Nav} from 'react-bootstrap';

import logo from '../asset/image/logo.svg';
import ic_call from '../asset/image/ic_call.svg';
import ic_email from '../asset/image/ic_email.svg';
import ic_insta from '../asset/image/ic_insta.svg';
import ic_fb from '../asset/image/ic_fb.svg';
import ic_youtube from '../asset/image/ic_youtube.svg';
import ic_modal from '../asset/image/ic_modal.svg';

import ic_facebook from '../asset/image/ic_facebook.svg'

class LoginInvestor extends Component {
  render(){
    return(
      <div className=''>
        <Navbar className="navbar" collapseOnSelect expand="lg"  variant="light">
          <Container>
            <Navbar.Brand className="logo-brand" href="/"><img src={ logo } alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-link">
                <Nav.Link className="active" href="#features">Beranda</Nav.Link>
                <Nav.Link href="#pricing">Pembiayaan</Nav.Link>
                <Nav.Link href="#pricing">Tentang Kami</Nav.Link>  
              </Nav>
              <Nav className="ml-auto">
                <Button className="link-green">Masuk</Button>
                <Button className="btn-green">Daftar</Button>
              </Nav>
            </Navbar.Collapse>
          </Container> 
        </Navbar>
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
        <footer>
        <Container>
          <div className="footer d-flex">
            <div className="footer-description">,
              <img src={logo} alt=""/>
              <p>Digitan bertekad membantu petani <br/>
                meningkatkan taraf ekonominya <br/>
                sekaligus investor dapat mencapai <br/>
                tujuan investasinya.</p>
            </div>
            <div className="ml-auto contact">
              <h6>Kontak Kami</h6>
              <li><a href="#"><img className="mr-1" src={ic_call} alt=""/> +621234567891</a></li>
              <li><a href="#"><img className="mr-1" src={ic_email} alt=""/> coco@digitan.com</a></li>
            </div>
            <div className="social-media">
              <h6>Social Media</h6>
              <li><a href="#"><img className="mr-1" src={ic_insta} alt=""/> Digitan </a></li>
              <li><a href="#"><img className="mr-1" src={ic_fb} alt=""/> Digitan </a></li>
              <li><a href="#"><img className="mr-1" src={ic_youtube} alt=""/> Digitan </a></li>
            </div>
          </div>
          <hr/>
        </Container>
      </footer>
      </Container>
    </div>
    )
  }
}

export default LoginInvestor;

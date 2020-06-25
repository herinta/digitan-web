import React from 'react';
import {  Navbar, Nav, Button, Container, Modal, Card } from 'react-bootstrap';
import '../asset/style.css';

import logo from '../asset/image/logo.svg';
import ic_call from '../asset/image/ic_call.svg';
import ic_email from '../asset/image/ic_email.svg';
import ic_insta from '../asset/image/ic_insta.svg';
import ic_fb from '../asset/image/ic_fb.svg';
import ic_youtube from '../asset/image/ic_youtube.svg';
import ic_modal from '../asset/image/ic_modal.svg';

export class Newnav extends React.Component {

  render() {
    return(
      <Navbar className="navbar" collapseOnSelect expand="lg"  variant="light">
        <Container>
          <Navbar.Brand className="logo-brand" href="/"><img src={ logo } alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-link">
               <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/pembiayaan">Pembiayaan</Nav.Link>
              <Nav.Link href="/penjualan">Penjualan</Nav.Link>
              <Nav.Link href="/tentang">Tentang Kami</Nav.Link>  >  
            </Nav>
            <Nav className="ml-auto">
              <Button className="link-green">Masuk</Button>
              <Button className="btn-green">Daftar</Button>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    )
  }
}

export class Myfooter extends React.Component {
  render(){
    return(
      <footer>
        <Container>
          <div className="footer row">
            <div className="footer-description col-md-6 colsm-12">,
              <img src={logo} alt=""/>
              <p>Digitan bertekad membantu petani <br/>
                meningkatkan taraf ekonominya <br/>
                sekaligus investor dapat mencapai <br/>
                tujuan investasinya.</p>
            </div>
            <div className="ml-auto contact col-md-3 col-sm-12">
              <h6>Kontak Kami</h6>
              <li><a href="#"><img className="mr-1" src={ic_call} alt=""/> +621234567891</a></li>
              <li><a href="#"><img className="mr-1" src={ic_email} alt=""/> coco@digitan.com</a></li>
            </div>
            <div className="social-media col-md-3 col-sm-12">
              <h6>Social Media</h6>
              <li><a href="#"><img className="mr-1" src={ic_insta} alt=""/> Digitan </a></li>
              <li><a href="#"><img className="mr-1" src={ic_fb} alt=""/> Digitan </a></li>
              <li><a href="#"><img className="mr-1" src={ic_youtube} alt=""/> Digitan </a></li>
            </div>
          </div>
          <hr/>
        </Container>
      </footer>
    )
  }
}

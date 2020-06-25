import React, { useState, Component } from 'react';

import {  Navbar, Nav, Container, Button, Modal, Row, Col, Card } from 'react-bootstrap';

import Alasan from './Components/Alasan';
import Pembiayaan from './Components/Pembiayaan';
import Pencapaian from './Components/Pencapaian';
import Cards from './Components/Cards';
import { Newnav, Myfooter } from './Components/MyComponents'

import './asset/style.css';

import kayumanis from './asset/image/kayumanis.svg';
import beras from './asset/image/beras.svg';
import jagung from './asset/image/jagung.svg';
import ic_biaya from './asset/image/ic_biaya.svg';
import ic_petani from './asset/image/ic_petani.svg';
import ic_investor from './asset/image/ic_investor.svg';
import ic_desa from './asset/image/ic_desa.svg';
import ic_lahan from './asset/image/ic_lahan.svg';
import ic_modal from './asset/image/ic_modal.svg';
import ic_pertanian from './asset/image/Ic_pertanian.svg';
import ic_panen from './asset/image/ic_panen.svg';
import ic_hasil from './asset/image/ic_hasil.svg';
import ic_close from './asset/image/ic_close.svg';
import logo from './asset/image/logo.svg';
import landingHeader from './asset/image/landing.svg';
import illus1 from './asset/image/illus-petani-investor.svg';
import ic from './asset/image/ic.svg';
import image from './asset/image/foto-petani.svg';
import ic_call from './asset/image/ic_call.svg';
import ic_email from './asset/image/ic_email.svg';
import ic_insta from './asset/image/ic_insta.svg';
import ic_fb from './asset/image/ic_fb.svg';
import ic_youtube from './asset/image/ic_youtube.svg';



function ModalDaftar(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Modal" closeButton>
        
       <div className="modalclose d-flex justify-content-end"> <a onClick={props.onHide}><img src={ic_close} alt=""/></a></div>
          <div className="d-flex justify-content-center">
            <Button className="btn-green mt-5" href="/Register">Daftar sebagai Investor</Button>
            
          </div>
          <span className="d-flex justify-content-center">atau</span>
          <div className="d-flex justify-content-center">
            <Button className="btn-green-outfill" href="/register-petani">Daftar sebagai mitra tani</Button>
          </div>

      </Modal.Body>
    </Modal>
  );
}

function ModalLogin(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Modal" closeButton>
        
       <div className="modalclose d-flex justify-content-end"> <a onClick={props.onHide}><img src={ic_close} alt=""/></a></div>
          <div className="d-flex justify-content-center">
            <Button className="btn-green mt-5" href="/login-investor">Masuk sebagai Investor</Button>
            
          </div>
          <span className="d-flex justify-content-center">atau</span>
          <div className="d-flex justify-content-center">
            <Button className="btn-green-outfill" href="/login-petani">Masuk sebagai mitra tani</Button>
          </div>

      </Modal.Body>
    </Modal>
  );
}

function Mynavbar() {
  const [modalogShow, setModalogShow] = React.useState(false);
  const [modalresShow, setModalres] = React.useState(false);

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg"  variant="light">
     
        <Container>
          <Navbar.Brand className="logo-brand" href="/"><img src={ logo } alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-link">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/pembiayaan">Pembiayaan</Nav.Link>
              <Nav.Link href="/penjualan">Penjualan</Nav.Link>
              <Nav.Link href="/tentang">Tentang Kami</Nav.Link>  
            </Nav>
            <Nav className="ml-auto">
              <Button className="btn-white-nofill mr-1" variant="primary" onClick={() => setModalogShow(true)}>
                Masuk
              </Button>
              <ModalLogin
              show={modalogShow}
              onHide={() => setModalogShow(false)}
              />
              <Button className="btn-white" variant="primary" onClick={() => setModalres(true)}>
                Daftar
              </Button>
              <ModalDaftar
                show={modalresShow}
                onHide={() => setModalres(false)}
              />
               
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>

  );
}


function App(){
  return(
    <div>
      <Mynavbar/>
      <div className="absolute">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="tittle-home">Pembiayaan yang Mensejahterakan Petani</h1>
              <p className="mt-2">Melalui pembiayaan dari Anda, sangat <br/> membantu petani untuk kehidupan <br/> yang lebih baik.</p>
              <Button className="mt-2 btn-green">Daftar</Button>
            </Col>
            <Col className="header-image" md={6}>
              <img src={landingHeader}/>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
        <section>
            <Row>
              <div className="d-flex justify-content-center illus-petani-investor" md={12} sm={12}>
                <div div className="investor text-right">
                  <h2>Investor</h2>
                  <div className="d-flex"><h5 className="mr-3">Tidak Memiliki Lahan</h5><img src={require('./asset/image/ic_cross.svg')}/></div>
                  <div className="d-flex"><h5 className="mr-3">Tidak Memiliki Kemampuan Bertani</h5><img src={require('./asset/image/ic_cross.svg')}/></div>
                  <div className="d-flex"><h5 className="mr-3">Memiliki Dana yang Dapat Disalurkan untuk Modal</h5><img src={require('./asset/image/ic_ceklist.svg')}/></div>
                </div>
               <div className="illus1"> <img src={illus1} alt=""/></div>
                <div div className="petani">
                  <h2>Petani</h2>
                  <div className="d-flex"><img src={require('./asset/image/ic_ceklist.svg')}/><h5 className="ml-3">Tidak Memiliki Lahan</h5></div>
                  <div className="d-flex"><img src={require('./asset/image/ic_ceklist.svg')}/><h5 className="ml-3">Tidak Memiliki Kemampuan Bertani</h5></div>
                  <div className="d-flex"><img src={require('./asset/image/ic_cross.svg')}/><h5 className="ml-3">Memiliki Dana yang Dapat Disalurkan untuk Modal</h5></div>
                </div>
              </div>
             
            </Row>
          </section>

          <section className="cara-kerja">
            <div className="tittle-section">
              <h3>Cara Kerja</h3>
              <div className="tittle-line"><hr></hr></div>
            </div>
            <div className="content mt-3  wow animate__animated animate__zoomIn">
              <Cards/>
            </div>
          </section>

          <section className="pembiayaan">
            <div className="tittle-section">
              <h3>Pembiayaan</h3>
              <div className="tittle-line"><hr></hr></div>
            </div>
            <div className=" mt-3  wow animate__animated animate__zoomIn">
              <Pembiayaan/>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="btn-green mt-5" href="/pembiayaan">Lihat Selengkapnya</Button>
            </div>
             
          </section>

        </Container>
        
        <section className="pencapaian">
           <Container>
                <div className="tittle-section py-4">
                    <h3>Pencapaian</h3>
                    <div className="tittle-line"><hr></hr></div>
                  </div>
                  <div className=" mt-3  wow animate__animated animate__zoomIn">
                    <Pencapaian/>
                  </div>
           </Container>
        </section>

        <section className="alasan">
           <Container>
            <div className="tittle-section py-4">
                <h3>Alasan Memilih Kami</h3>
                <div className="tittle-line"><hr></hr></div>
              </div>
              <div className=" mt-3  wow animate__animated animate__zoomIn">
                <Alasan/>
              
              </div>
           </Container>
        </section>
        <footer>
          <Myfooter/>
      </footer>
      </div>
       
    </div>
  )
}


export default App;

import React, { useState, Component } from 'react';

import {  Navbar, Nav, Container, Button, Modal, Row, Col, Card } from 'react-bootstrap';


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
                <img src={illus1} alt=""/>
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
            <div className="cara-kerja-card d-flex justify-content-between">
                <Card className="card-small">
                    <img src={ic_modal}/>
                    <Card.Body>
                        <h5>Mendapat Modal</h5>
                        <h6>Dapatkan modal dengan mudah dan cepat dari para Investor</h6>
                    </Card.Body>
                </Card>
                <Card className="card-small">
                    <img src={ic_pertanian}/>
                    <Card.Body>
                        <h5>Memulai Pertanian</h5>
                        <h6>Petani memulai proses pertanian di bawah pengawasan DigiTan</h6>
                    </Card.Body>
                </Card>
                <Card className="card-small">
                    <img src={ic_panen}/>
                    <Card.Body>
                        <h5>Jual Hasil Panen</h5>
                        <h6>DigiTan akan membantu menjual hasil panenmu kepada para mitra kami</h6>
                    </Card.Body>
                </Card>
                <Card className="card-small">
                    <img src={ic_hasil}/>
                    <Card.Body>
                        <h5>Bagi Hasil</h5>
                        <h6>DigiTan akan membagi keuntungan sesuai dengan kesepakatan</h6>
                    </Card.Body>
                </Card>
            </div>
            </div>
          </section>

          <section className="pembiayaan">
            <div className="tittle-section">
              <h3>Pembiayaan</h3>
              <div className="tittle-line"><hr></hr></div>
            </div>
            <div className=" mt-3  wow animate__animated animate__zoomIn">
            <div className="content d-flex justify-content-between">
              <Card className="card card-pembiayaan">
                    <img src={kayumanis}/>
                    <div className="tittle-card">
                        <h5 className="card-title">Kayu Manis</h5>
                    </div>
                    <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex">
                            <div className="item">
                                <h6>Harga</h6>
                                <p>Rp.2.000.000</p>
                            </div>
                            <div className="item">
                                <h6>Bagi Hasil</h6>
                                <p>20%/tahun</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex">
                            <div className="item">
                                <h6>Stok</h6>
                                <p>34 slot</p>
                            </div>
                            <div className="item">
                                <h6>Tersisa</h6>
                                <p>12 slot</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="tittle-card">
                        <button href="/deskripsi-pembiayaan" className="btn-green mt-1 ml-6">Lihat Pembiayaan</button>
                    </div>
                </Card>
                <Card className="card card-pembiayaan">
                    <img src={beras}/>
                    <div className="tittle-card">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex">
                            <div className="item">
                                <h6>Harga</h6>
                                <p>Rp.2.000.000</p>
                            </div>
                            <div className="item">
                                <h6>Bagi Hasil</h6>
                                <p>20%/tahun</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex">
                            <div className="item">
                                <h6>Stok</h6>
                                <p>34 slot</p>
                            </div>
                            <div className="item">
                                <h6>Tersisa</h6>
                                <p>12 slot</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="tittle-card">
                        <button href="#" className="btn-green mt-1 ml-6">Lihat Pembiayaan</button>
                    </div>
                </Card>
                <Card className="card card-pembiayaan">
                    <img src={jagung} alt=""/>
                    <div className="tittle-card">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex">
                            <div className="item">
                                <h6>Harga</h6>
                                <p>Rp.2.000.000</p>
                            </div>
                            <div className="item">
                                <h6>Bagi Hasil</h6>
                                <p>20%/tahun</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex">
                            <div className="item">
                                <h6>Stok</h6>
                                <p>34 slot</p>
                            </div>
                            <div className="item">
                                <h6>Tersisa</h6>
                                <p>12 slot</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="tittle-card">
                        <button href="#" className="btn-green mt-1 ml-6">Lihat Pembiayaan</button>
                    </div>
                </Card>

            </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="btn-green mt-5" href="">Lihat Selengkapnya</Button>
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
                  <div className="content d-flex justify-content-between">
                <Card className="card-small">
                    <img src={ic_biaya}/>
                    <Card.Body>
                        <h5>Rp 100 M</h5>
                        <h6>Biaya Tersalurkan</h6>
                    </Card.Body>
                </Card>
                <Card className="card-small">
                    <img src={ic_petani}/>
                    <Card.Body>
                        <h5>2000n</h5>
                        <h6>Petani Terdaftar</h6>
                    </Card.Body>
                </Card>
                <Card className="card-small">
                    <img src={ic_investor}/>
                    <Card.Body>
                        <h5>5670</h5>
                        <h6>Investor Terdaftar</h6>
                    </Card.Body>
                </Card>
                <Card className="card-small">
                    <img src={ic_desa}/>
                    <Card.Body>
                        <h5>500</h5>
                        <h6>Desa Terdaftar</h6>
                    </Card.Body>
                </Card>
                <Card className="card-small">
                    <img src={ic_lahan}/>
                    <Card.Body>
                        <h5>600 ha</h5>
                        <h6>Lahan Terdaftar</h6>
                    </Card.Body>
                </Card>
            </div>
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
              <div className="content">
                    <Row>
                        <Col md={12} sm={12} xl={4}>
                            <img src={image}/>
                        </Col>
                        <Col md={12} sm={12} xl={8}>
                        <div className="item-group d-flex justify-content-center flex-wrap">
                            <div className="item-list">
                                <img src={ic}/>
                                <h5 className="mt-3">Mudah dan cepat</h5>
                                <p>Mudah dalam mencari pembiayaan dan cepat dalam memperoleh pembiayaan</p>
                            </div>
                            <div className="item-list">
                                <img src={ic}/>
                                <h5 className="mt-3">Berdampak sosial</h5>
                                <p>Investasi sekaligus membantu meningkatkan taraf hidup petani</p>
                            </div>
                            <div className="item-list">
                                <img src={ic}/>
                                <h5 className="mt-3">Bagi hasil adil dan transparan</h5>
                                <p>Pembagian hasil yang adil dan transparan serta tidak memberatkan mitra tani dalam pengembalian</p>
                            </div>
                            <div className="item-list">
                                <img src={ic}/>
                                <h5 className="mt-3">Ketahanan pangan</h5>
                                <p>Ikut berpartisipasi dalam peningkatan produksi pangan dalam negeri</p>
                            </div>
                        </div>
                        </Col>
                        
                    </Row>
                </div>
              </div>
           </Container>
        </section>
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
      </div>
       
    </div>
  )
}


export default App;

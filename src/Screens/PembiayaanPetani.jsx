import React, { Component } from 'react';
import {Row, Container, Button} from 'react-bootstrap'

import '../Components/style.css';
import { Card } from 'react-bootstrap';

import {Navbar, Nav} from 'react-bootstrap';

import logo from '../asset/image/logo.svg';
import ic_call from '../asset/image/ic_call.svg';
import ic_email from '../asset/image/ic_email.svg';
import ic_insta from '../asset/image/ic_insta.svg';
import ic_fb from '../asset/image/ic_fb.svg';
import ic_youtube from '../asset/image/ic_youtube.svg';
import ic_modal from '../asset/image/ic_modal.svg';

import ic_facebook from '../asset/image/ic_facebook.svg'

import ic_search from '../asset/image/ic_search.svg';

import kayumanis from '../asset/image/kayumanis.svg';
import beras from '../asset/image/beras.svg';
import jagung from '../asset/image/jagung.svg'

import '../asset/style.css';

class pembiayaan extends Component {
    render(){
        return(
            <div className="Background-grey">
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
                            <Button className="btn-white-nofill mr-1" variant="primary">
                                Masuk
                            </Button>
                           
                            <Button className="btn-white" variant="primary">
                                Daftar
                            </Button>
                           
                                
                            </Nav>
                        </Navbar.Collapse>
                        </Container> 
                    </Navbar>
                    <Container>
                    <section className="pembiayaan">
                        
                        <div className=" ">
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
        
                        
                    </section>
                    <section className="pembiayaan">
                        
                        <div className=" ">
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
        
                        
                    </section>
                </Container>
            </div>
        )
    };
}

export default pembiayaan;
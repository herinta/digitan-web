
import React, { Component } from 'react';
import {Row, Container, Button,} from 'react-bootstrap';
import {Navbar,  Nav} from 'react-bootstrap';

import logo from '../asset/image/logo.svg';
import ic_call from '../asset/image/ic_call.svg';
import ic_email from '../asset/image/ic_email.svg';
import ic_insta from '../asset/image/ic_insta.svg';
import ic_fb from '../asset/image/ic_fb.svg';
import ic_youtube from '../asset/image/ic_youtube.svg';
import ic_modal from '../asset/image/ic_modal.svg';
import ic_facebook from '../asset/image/ic_facebook.svg';


import '../Components/style.css';
import '../asset/style.css';


import kayu from '../asset/image/kayujambi.svg';

class PembiayaanDesc extends Component{
    render(){
        return(
            <div>
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
                <div className="background-grey desc pt-5">
                    <Container>
                        <div className="row card-large">
                            <div className="col-xl-5 col-md-12">
                                <img src={kayu} />
                            </div>
                            <div className="col-xl-7 col-md-12">
                                <h2>Kayu Manis Jambi</h2>
                                <h4>Rp. 2.000.000/<span>slot</span></h4>
                                <div className="deskripsi d-flex flex-wrap">
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row info-deskripsi">
                            <div className="card-large col-xl-8 col-md-12 mt-5">
                                <h3>Deskripsi</h3>
                                <p>Kayu manis atau Cinnamomum burmannii aslinya merupakan tanaman pohon. Pohon kayu manis atau cinnamon tree adalah salah satu jenis pohon penghasil rempah-rempah yang terkenal. Aroma kayu manis diketahui tajam, terasa pedas dan manis.
                                 Rempah kayu manis tidak hanya digunakan pada kue-kue namun juga pada berbagai jenis makanan di dunia. Tidak berlebihan jika dikatakan bahwa kayu manis merupakan salah satu tanaman rempah yang tertua di dunia. Tanaman ini juga beberapa kali disebutkan dalam Kitab Suci agama tertentu.

                                Yang digunakan pada kayu manis adalah kulitnya. Kulit kayu manis tidak hanya dijadikan sebagai pelengkap atau bumbu masakan, namun juga secara tradisional digunakan sebagai tanaman obat herbal. Manfaat kayu manis dalam dunia kesehatan yakni mengobati radang sendi, diabetes atau kencing manis, asam urat, sakit kepala, penyakit kulit, perut kembung, masuk angin, sakit maag, diare, dan menjaga kesehatan jantung.</p>
                            </div>
                            
                            <div className="card-white col-xl-4 col-md-12 mt-5">
                               <h3>Mulai Pembiayaan</h3>
                            </div>
                        </div>
                    </Container>
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
            </div>
        )
    };
}

export default PembiayaanDesc;
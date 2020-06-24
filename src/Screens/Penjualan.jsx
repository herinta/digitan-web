import React from 'react';

import kayumanis from '../asset/image/kayumanis.svg';
import beras from '../asset/image/beras.svg';
import jagung from '../asset/image/jagung.svg';
import {  Navbar, Nav, Button, Container, Modal, Card } from 'react-bootstrap';
import '../asset/style.css';

import logo from '../asset/image/logo.svg';
import ic_call from '../asset/image/ic_call.svg';
import ic_email from '../asset/image/ic_email.svg';
import ic_insta from '../asset/image/ic_insta.svg';
import ic_fb from '../asset/image/ic_fb.svg';
import ic_youtube from '../asset/image/ic_youtube.svg';
import ic_modal from '../asset/image/ic_modal.svg';

const Penjualan= () => {
    return (
        <div className="Penjualan">
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
            <div className="d-flex justify-content-between">
            <Card>
                <Card.Img variant="top" src={kayumanis} />
                <Card.Body>
                    <Card.Title>Kayu Manis Jambi</Card.Title>
                    <h5>Rp. 10.000/kg</h5>
                    
                    <h6 className="mt-3">Minimal pembelian : 1 ton </h6>

                    <h6>Ariqah Hasna</h6>
                    <p>KOTA PURWOKERTO</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={beras} />
                <Card.Body>
                    <Card.Title>Kayu Manis Jambi</Card.Title>
                    <h5>Rp. 10.000/kg</h5>
                    
                    <h6 className="mt-3">Minimal pembelian : 1 ton </h6>

                    <h6>Ariqah Hasna</h6>
                    <p>KOTA PURWOKERTO</p>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={jagung} />
                <Card.Body>
                    <Card.Title>Kayu Manis Jambi</Card.Title>
                    <h5>Rp. 10.000/kg</h5>
                    
                    <h6 className="mt-3">Minimal pembelian : 1 ton </h6>

                    <h6>Ariqah Hasna</h6>
                    <p>KOTA PURWOKERTO</p>
                </Card.Body>
            </Card>
            </div>
        </Container>
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
    );
}

export default Penjualan;


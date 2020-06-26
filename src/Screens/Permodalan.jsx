import React from 'react';
import {  Navbar, Nav, Button, Container, Modal, Card } from 'react-bootstrap';
import '../asset/style.css';

import { NavKomoditas, Myfooter } from '../Components/MyComponents';

import empety from '../asset/image/empety.svg'

const Permodalan = () =>{
    return(
        <main>
            <NavKomoditas/>
            <div className="background-grey py-5">
                <Container>
                    <div className="d-flex justify-content-between">
                        <h4>Permodalan</h4>
                        <a href="/tambah-permodalan" className="btn-green">
                            + Tambah Permodalan
                        </a>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <img src={empety} alt=""/>
                    </div>
                    <h5 className="text-grey d-flex justify-content-center">Tidak ada permodalan yang ditemukan</h5>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Container>
            </div>
        </main>
    )
}

export default Permodalan;

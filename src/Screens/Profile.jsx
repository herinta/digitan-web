import React from 'react';
import {  Navbar, Nav, Button, Container, Modal, Card } from 'react-bootstrap';
import '../asset/style.css';

import { NavProfile, Myfooter } from '../Components/MyComponents';

import ic_pembiayaan from '../asset/image/nav_pembiayaan.svg'
import ic_wallet from '../asset/image/nav_wallet.svg'
import ic_transaksi from '../asset/image/nav_transaksi.svg'
import ic_profile from '../asset/image/nav_profile.svg'


const Profile = () => {
  
        return(
            <main>
                <NavProfile/>
                <div className="background-grey py-5">
                
                <Container>
                    <div className="profile-content row">
                        <div className="Navigasi col-md-3 col-sm-12">
                        <div className="item-nav">
                                <a href="/profile"><img src={ic_pembiayaan} alt=""/> Pembiayaan</a>
                            </div>
                            <div className="item-nav">
                                <a href="/profile-dompet-saya"><img src={ic_wallet} alt=""/>Dompet Saya</a>
                            </div>
                            <div className="item-nav">
                                <a href="/profile-riwayat-transaksi"><img src={ic_transaksi} alt=""/>Riwayat Transaksi</a>
                            </div>
                            <div className="item-nav">
                                <a href="/profile-saya"><img src={ic_profile} alt=""/>Profile saya</a>
                            </div>                    
                        </div>
                        <div className="background-white col-md-9">
                            <h4>Pembiayaan</h4>
                            <div className="Card mt-5">
                                <h5>Mulai Pembiayaan</h5>
                                <p>Bersama petani untuk kehidupan yang lebih baik</p>
                                <div className="mt-5">
                                    <a href="/permodalan" className="btn-green">Lihat Komoditas</a>
                                </div>
                            </div>
                            <hr className="mt-5"></hr>
                            <div className="info">
                                <b><h4>Riwayat Pembiayaan</h4></b>
                                <div className="d-flex">
                                    <div className="item-list active"> <a href="">Dalam Pembiayaan</a></div>
                                    <div className="item-list text-grey"> <a href="">Sedang Berjalan</a></div>
                                    <div className="item-list text-grey"> <a href="">Selesai</a></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            </main>
        )
    
}

export default Profile;
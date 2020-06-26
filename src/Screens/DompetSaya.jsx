import React from 'react';
import {  Navbar, Nav, Button, Container, Modal, Card } from 'react-bootstrap';
import '../asset/style.css';

import { Newnav, Myfooter } from '../Components/MyComponents';

import ic_pembiayaan from '../asset/image/nav_pembiayaan.svg'
import ic_wallet from '../asset/image/nav_wallet.svg'
import ic_transaksi from '../asset/image/nav_transaksi.svg'
import ic_profile from '../asset/image/nav_profile.svg'


const DompetSaya = () => {
  
        return(
            <main>
                <Newnav/>
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
                           <h4>Dompet Saya</h4>
                          <div className="d-flex flex-wrap mt-2">
                          <div className="card">
                               <h6>Total Dana yang bisa dicairkan</h6>
                               <h2>Rp. 0</h2>
                               <div className="mt-4 btn-card">
                                <Button className="btn-green">Cairkan Dana</Button>
                               </div>
                           </div>
                           <div className="card">
                               <h5>Total Permodalan</h5>
                               <h6>Total Permodalan selama ini</h6>
                               <h2 className="mt-3">Rp. 0</h2>
                           </div>
                           <div className="card">
                                <h5>Dalam Pendanaan</h5>
                               <h6>Total Permodalan selama ini</h6>
                               <h2 className="mt-3">Rp. 0</h2>
                           </div>
                           <div className="card">
                                <h5>Dana Dikelola</h5>
                               <h6>Total Permodalan selama ini</h6>
                               <h2 className="mt-3">Rp. 0</h2>
                           </div>
                          </div>
                        </div>
                    </div>
                </Container>
            </div>
            </main>
        )
    
}

export default DompetSaya;
import React from 'react';
import {  Navbar, Nav, Button, Container, Modal, Card } from 'react-bootstrap';
import '../asset/style.css';

import { NavKomoditas, Myfooter } from '../Components/MyComponents';
import dot from '../asset/image/dot-green.svg'

const TambahProduct = () => {
    return(
        <main>
            <NavKomoditas/>
            <div className="background-grey py-5">
                <Container>
                    <div className="background-white2">
                        <h4>Informasi Produk</h4>
                        <div className="form-group mt-4">
                            
                            <h6><span><img className="mr-4" src={dot} alt=""/></span>Nama Produk</h6>
                            <input class="form-control" type="text" placeholder="Cth. Kayu Manis Jambi"></input>

                            <div className=" deskripsi-input">
                                <h6 className="mt-3"><span><img className="mr-4" src={dot} alt=""/></span>Deskripsi Produk</h6><br></br>
                                <div class="input-group">
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-white mt-5">
                        <h4>Detail Produk</h4>
                        <div className="form-group mt-4">
                            
                            <h6><span><img className="mr-4" src={dot} alt=""/></span>Harga per kilogram</h6>
                            <input class="form-control" type="text" placeholder="Cth.Rp. 200.000"></input>
                            
                            <h6 className="mt-3"><span><img className="mr-4" src={dot} alt=""/></span>Minimal Pembelian</h6>
                            <input class="form-control" type="text" placeholder="Cth. 1 Ton"></input>
                            
                            <h6 className="mt-3"><span><img className="mr-4" src={dot} alt=""/></span>Persediaan / stok</h6>
                            <input class="form-control" type="text" placeholder="Cth. 10.000 Ton"></input>

                           
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button className="btn btn-green">
                            Kirim
                        </button>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export default TambahProduct;
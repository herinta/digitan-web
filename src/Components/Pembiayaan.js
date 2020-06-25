import React from 'react';
import '../Components/style.css';
import { Card } from 'react-bootstrap';

import kayumanis from '../asset/image/kayumanis.svg';
import beras from '../asset/image/beras.svg';
import jagung from '../asset/image/jagung.svg';

const Pembiayaan = () => {
    return (
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
                    <button href="#" className="btn-green mt-1 ml-6">Lihat Pembiayaan</button>
                </div>
            </Card>
            <Card className="card card-pembiayaan">
                <img src={jagung} alt=""/>
                <div className="tittle-card">
                    <h5 className="card-title">Jagung</h5>
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
    );
}

export default Pembiayaan;

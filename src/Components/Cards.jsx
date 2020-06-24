import React from 'react';
import '../Components/style.css';

import { Card } from 'react-bootstrap';

import ic_modal from '../asset/image/ic_modal.svg';
import ic_pertanian from '../asset/image/Ic_pertanian.svg';
import ic_panen from '../asset/image/ic_panen.svg';
import ic_hasil from '../asset/image/ic_hasil.svg';

const Cards = () => {
    return (
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
    );
}

export default Cards;
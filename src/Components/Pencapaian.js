import React from 'react';
import {Card} from 'react-bootstrap';

import '../Components/style.css';

import ic_biaya from '../asset/image/ic_biaya.svg';
import ic_petani from '../asset/image/ic_petani.svg';
import ic_investor from '../asset/image/ic_investor.svg';
import ic_desa from '../asset/image/ic_desa.svg';
import ic_lahan from '../asset/image/ic_lahan.svg';

const Pencapaian = () => {
    return(
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
    );
}

export default Pencapaian;
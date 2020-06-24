import React from 'react';
import '../Components/style.css';

import { Row, Col } from 'react-bootstrap';
import image from '../asset/image/foto-petani.svg';

import ic from '../asset/image/ic.svg';
import ic2 from '../asset/image/ic.svg';
import ic3 from '../asset/image/ic.svg';
import ic4 from '../asset/image/ic.svg';


const Alasan = () => {
    return(
        <div className="content">
            <Row>
                <Col md={12} sm={12} xl={4}>
                    <img src={image}/>
                </Col>
                <Col md={12} sm={12} xl={8}>
                <div className="item-group d-flex flex-wrap">
                    <div className="item-list">
                        <img src={ic}/>
                        <h5>Mudah dan cepat</h5>
                        <p>Mudah dalam mencari pembiayaan dan cepat dalam memperoleh pembiayaan</p>
                    </div>
                    <div className="item-list">
                        <img src={ic}/>
                        <h5>Berdampak sosial</h5>
                        <p>Investasi sekaligus membantu meningkatkan taraf hidup petani</p>
                    </div>
                    <div className="item-list">
                        <img src={ic}/>
                        <h5>Bagi hasil adil dan transparan</h5>
                        <p>Pembagian hasil yang adil dan transparan serta tidak memberatkan mitra tani dalam pengembalian</p>
                    </div>
                    <div className="item-list">
                        <img src={ic}/>
                        <h5>Ketahanan pangan</h5>
                        <p>Ikut berpartisipasi dalam peningkatan produksi pangan dalam negeri</p>
                    </div>
                </div>
                </Col>
                
            </Row>
        </div>
    )
}

export default Alasan;
import React from 'react';

import kayumanis from '../asset/image/kayumanis.svg';
import beras from '../asset/image/beras.svg';
import jagung from '../asset/image/jagung.svg';
import {  Navbar, Nav, Button, Container, Modal, Card } from 'react-bootstrap';
import '../asset/style.css';

import { Newnav, Myfooter } from '../Components/MyComponents';



const Penjualan= () => {
    return (
        <div>
        <Newnav/>
            <div className="Penjualan background-grey py-5">
                <Container>
                    <div className="d-flex justify-content-between flex-wrap">
                    <Card>
                        <Card.Img variant="top" src={kayumanis} />
                        <Card.Body>
                            <Card.Title><a href="/deskripsi-penjualan"> Kayu Manis Jambi</a></Card.Title>
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
                    <div className="d-flex justify-content-between mt-5  flex-wrap">
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
                <div className="d-flex justify-content-center">
                <Button className="btn-green mt-5">Selengkapnya</Button>
                </div>
            </div>
        <Myfooter/>
    </div>
    );
}

export default Penjualan;


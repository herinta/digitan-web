
import React, { Component } from 'react';
import {Row, Container, Button,} from 'react-bootstrap';

import '../Components/style.css';
import '../asset/style.css';
import { Newnav, Myfooter } from '../Components/MyComponents';

import kayu from '../asset/image/kayujambi.svg';

class PembiayaanDesc extends Component{
    render(){
        return(
            <div>
                <Newnav/>
                <div className="background-grey desc pt-5">
                    <Container>
                        <div className="row card-large">
                            <div className="col-xl-5 col-md-12">
                                <img src={kayu} />
                            </div>
                            <div className="col-xl-7 col-md-12">
                                <h2>Kayu Manis Jambi</h2>
                                <h4>Rp. 2.000.000/<span>slot</span></h4>
                                <div className="deskripsi d-flex flex-wrap">
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row info-deskripsi mb-5">
                            <div className="card-large col-xl-8 col-md-12 mt-5">
                                <h3>Deskripsi</h3>
                                <p>Kayu manis atau Cinnamomum burmannii aslinya merupakan tanaman pohon. Pohon kayu manis atau cinnamon tree adalah salah satu jenis pohon penghasil rempah-rempah yang terkenal. Aroma kayu manis diketahui tajam, terasa pedas dan manis.
                                 Rempah kayu manis tidak hanya digunakan pada kue-kue namun juga pada berbagai jenis makanan di dunia. Tidak berlebihan jika dikatakan bahwa kayu manis merupakan salah satu tanaman rempah yang tertua di dunia. Tanaman ini juga beberapa kali disebutkan dalam Kitab Suci agama tertentu.

                                Yang digunakan pada kayu manis adalah kulitnya. Kulit kayu manis tidak hanya dijadikan sebagai pelengkap atau bumbu masakan, namun juga secara tradisional digunakan sebagai tanaman obat herbal. Manfaat kayu manis dalam dunia kesehatan yakni mengobati radang sendi, diabetes atau kencing manis, asam urat, sakit kepala, penyakit kulit, perut kembung, masuk angin, sakit maag, diare, dan menjaga kesehatan jantung.</p>
                            </div>
                            
                            <div className="card-white col-xl-4 col-md-12 mt-5">
                               <h3>Mulai Pembiayaan</h3>
                            </div>
                        </div>
                    </Container>
                </div>
                <footer >
                    <Myfooter/>
                </footer>
            </div>
        )
    };
}

export default PembiayaanDesc;

import React, { Component } from 'react';
import {Row, Container, Button,} from 'react-bootstrap';

import '../Components/style.css';
import '../asset/style.css';
import { Newnav, Myfooter } from '../Components/MyComponents';

import kayu from '../asset/image/kayujambi.svg';
import add from '../asset/image/add.svg'

class PembiayaanDesc extends Component{
    render(){
        return(
            <div>
                <Newnav/>
                <div className="background-grey desc py-5 px-5">
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
                                        <h6>Proyek Berjalan</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Periode Investasi</h6>
                                        <h5>1 Tahun</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Bagi Hasil</h6>
                                        <h5>12% / tahun</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Periode Bagi Hasil</h6>
                                        <h5>3 Bulan</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Tersisa</h6>
                                        <h5>12 slot</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Proyek Dibuka</h6>
                                        <h5>12 April 2020</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Terdanai</h6>
                                        <h5>12 slot</h5>
                                    </div>
                                    <div className="item-group">
                                        <h6>Total slot </h6>
                                        <h5>24 slot</h5>
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

                               <h6 className="mt-5"> Jumlah Slot Disalurkan</h6>
                               <div className="d-flex">
                                    <img src={add} alt=""/>
                                    <h6 className="mt-2 ml-2">Rp. 4.000.000</h6>
                               </div>

                               <p className="mt-3">Total Pengembalian Hingga</p>
                               <div className="card">
                                   <div className="d-flex justify-content-center"><h6>Rp. 4.480.000</h6></div>
                               </div>
                               <div className="d-flex justify-content-center">
                               <h6>12 % Keuntungan</h6>
                               </div>

                               <button className="btn btn-green mt-5">Salurkan Pembiayaan</button>


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
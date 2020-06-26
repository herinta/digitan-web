import React from 'react';

import '../asset/style.css';

import { Newnav, Myfooter } from '../Components/MyComponents';
import { render } from '@testing-library/react';
import { ButtonGroup } from 'react-bootstrap';

import product from '../asset/image/product.svg';
import info from '../asset/image/info-product';

const PenjualanDesc = () => {
    
        return(
            <div className="">
                <Newnav/>
                <div className="backgroound-grey">
                    <div className="card-large">
                        <div className="product col-md-4 col-sm-12">
                            <img src={product} alt=""/>
                        </div>
                        <div className="product-info col-md-8 col-sm-12">
                            <h2>Kayu Manis Jambi</h2>
                            <img src={info} alt=""/>
                            <h3 className="mt-4">Rp. 10.000/kg</h3>
                            <p>Minimal pembelian : 1 ton </p>
                            <p>Stok : 5.000 ton </p>
                            <Button className="d-flex btn-green">Beli Sekarang</Button>
                        </div>
                    </h5>
                </div>
            </div>
        );
    
}

export default PenjualanDesc;
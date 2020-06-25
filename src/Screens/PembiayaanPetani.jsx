import React, { Component } from 'react';
import {Row, Container, Button} from 'react-bootstrap'

import '../Components/style.css';
import { Card } from 'react-bootstrap';

import {Navbar, Nav} from 'react-bootstrap';


import ic_search from '../asset/image/ic_search.svg';

import kayumanis from '../asset/image/kayumanis.svg';
import beras from '../asset/image/beras.svg';
import jagung from '../asset/image/jagung.svg'
import { Newnav, Myfooter } from '../Components/MyComponents';
import Pembiayaan from '../Components/Pembiayaan';

import '../asset/style.css';

class pembiayaan extends Component {
    render(){
        return(
            <div className="Background-grey">
                    <Newnav/>
                <Container>
                <section className="pembiayaan">
                    
                    <div className=" mt-3  wow animate__animated animate__zoomIn">
                    <Pembiayaan/>
                    </div>
                   
                    
                </section>
                <section className="pembiayaan">
                    
                    <div className=" mt-3  wow animate__animated animate__zoomIn">
                    <Pembiayaan/>
                    </div>
                   
                    
                </section>
                    
                </Container>
                <Myfooter/>
            </div>
        )
    };
}

export default pembiayaan;
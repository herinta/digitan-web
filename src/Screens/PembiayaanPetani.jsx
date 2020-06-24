import React, { Component } from 'react';
import {Row, Container, Button} from 'react-bootstrap'
import { Newnav, Myfooter } from '../Components/MyComponents';

import Pembiayaan from '../Components/Pembiayaan';
import Pembiayaan2 from '../Components/Pembiayaan';

import ic_search from '../asset/image/ic_search.svg';

import '../asset/style.css';

class pembiayaan extends Component {
    render(){
        return(
            <div>
                <Newnav/>
                <div className="content">
                    <Container>
                        <Button type="submit">Search <img src={ic_search}/></Button>
                        <Row className="">
                            <Pembiayaan/>
                        </Row>
                        <Row>
                            <Pembiayaan2/>
                        </Row>    
                    </Container>
                </div>
            </div>
        )
    };
}

export default pembiayaan;
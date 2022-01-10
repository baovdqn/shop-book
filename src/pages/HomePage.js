import React from 'react';

import Menu from '../components/Menu';
import Product from '../components/Product';


import { Col, Row, Button } from 'reactstrap'

const HomePage = () => {
    return (
        <Col md='9'>
            <Menu></Menu>
            <Product type='all'></Product>
            <Row className='Row-More'>
                <Col>
                    <Button outline color='primary'>Xem thêm</Button>
                </Col>
            </Row>
        </Col>
    );
}

export default HomePage;

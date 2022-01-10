import React from 'react';


import Menu from '../components/Menu';
import Product from '../components/Product';


import { Col } from 'reactstrap'

const ListItem = (props) => {
    const { type } = props;
    return (
        <Col md='9'>
            <Menu></Menu>
            <Product type={type}></Product>
        </Col>
    );
}

export default ListItem;

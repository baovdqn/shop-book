import React from 'react';

import Menu from '../components/Menu'

import { Button, Col, Row, Table } from 'reactstrap'
import { CartContext } from '../contexts/CartProvider'

import './Cart.css'

const Cart = () => {
    return (
        <Col md='9'>
            <Menu></Menu>
            <Row>
                <Col>
                    <Table bordered >
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <CartContext.Consumer>
                        {({Cart, deleteItem}) => <tbody>
                            {Cart.length === 0 && <tr>
                                <td colSpan='5'>Giỏ chưa có hàng</td>
                            </tr>}
                            {Cart.map((item,index) => (
                                <tr>
                                    <td>
                                        <img src={item.img} width='100' alt={item.author}></img>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>1</td>
                                    <td>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</td>
                                    <td>
                                        <Button color="danger" onClick={()=>deleteItem(index)}>X</Button>
                                    </td>
                                </tr>
                            ))}
                            {<tr>
                                <td colSpan='3'>Thành tiền</td>
                                <td>{
                                    (Cart.reduce((a,b) => {
                                    a = b.price + a;
                                    return a;
                                },0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                                }    
                                        
                                </td>
                                <td></td>
                            </tr>
                            }
                        </tbody>
                        }
                        </CartContext.Consumer>
                    </Table>
                    
                    <Button color="info">Thanh toán</Button>
                </Col>
            </Row>
        </Col>
    );
}

export default Cart;

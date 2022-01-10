import React, { useState, useEffect } from 'react';
import axios from 'axios'

import {
  useParams
} from "react-router-dom";

import { CartContext } from '../contexts/CartProvider'

import Menu from '../components/Menu';

import { Col, Row, Button } from 'reactstrap'
import './ItemProduct.css'

const ItemDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState(
    []
  );

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  });
  console.log(id)
  console.log(data)

  return (
    <Col md='9'>
      <Menu></Menu>
      {data.filter(x => x._id === id).map(item => (
        <div className='ItemProduct mb-3'>
          <Row className='pt-3'>
            <Col md='4'>
              <img className='m-auto' src={item.img} alt={item.id}></img>
            </Col>
            <Col md='8'>
              <h3>{item.name}</h3>
              <p>Giá bán: {item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</p>
              <p>Trạng thái: Còn hàng</p>
              <CartContext.Consumer>
                {
                  ({ addToCart }) => (
                    <Button onClick={() => addToCart(item)} color="info">Thêm vào giỏ hàng</Button>

                  )
                }
              </CartContext.Consumer>
            </Col>
          </Row>
          <Row className='pt-3'>
            <Col>
              <div className='ItemProduct-description'>
                <h4>Mô tả</h4>
                <p>
                  {item.description}
                </p>

              </div>

            </Col>
          </Row>

        </div>
      ))
      }

    </Col>
  )
}

export default ItemDetail;
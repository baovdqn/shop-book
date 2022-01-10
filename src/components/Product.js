import React, { useState, useEffect } from 'react';
import './Product.css'
import axios from 'axios'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {
  Link
} from "react-router-dom";

import {
  Col,
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Row, Button
} from 'reactstrap';


import { CartContext } from '../contexts/CartProvider'

const Product = (props) => {
  const { type } = props;
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

  return (
    <Row>
      { type === 'all' && data.map(item => // Nếu props type truyền vào là all thì render render tất cả các sản phẩm
      (
        <Col xs='6' md='4'>
          <Card className='mb-2 card-product'>
            <CardImg top src={item.img} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                {item.name}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                <span>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}đ</span>

              </CardSubtitle>
              <CartContext.Consumer>
                {({ addToCart }) => (
                  <div className='button-product'>
                    <Button onClick={() => addToCart(item)} color="success">Thêm vào giỏ</Button>
                    <Link to={`${item._id}`}>
                      <Button color="danger">
                        <FontAwesomeIcon icon={faSearch} />
                        Chi tiết
                    </Button>

                    </Link>
                  </div>
                )}
              </CartContext.Consumer>

            </CardBody>
          </Card>
        </Col>
      )
      )
      }

      { type !== 'all' && data.filter(x => x.type === type).map(item => (
        <Col xs='6' md='4'>
          <Card className='mb-2 card-product'>
            <CardImg top src={item.img_product} alt="Card image cap" />
            <CardBody>
              <CardTitle>{item.name_product}</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                <span>{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}đ</span>
              </CardSubtitle>
              <CartContext.Consumer>
                {({ addToCart }) => (
                  <div className='button-product'>
                    <Button onClick={() => addToCart(item)} color="success">Thêm vào giỏ</Button>
                    <Link to={`${item.id}`}>
                      <Button color="danger">
                        <FontAwesomeIcon icon={faSearch} />
                    Chi tiết
                    </Button>

                    </Link>

                  </div>
                )}
              </CartContext.Consumer>
            </CardBody>
          </Card>
        </Col>
      ))
      }
      { type !== 'all' && data.filter(x => x.type === type).length === 0 &&
        <Col xs='6' md='4'>
          Chưa có sản phẩm
      </Col>
      }
    </Row>
  );
};

export default Product;
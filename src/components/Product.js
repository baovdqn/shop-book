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
    [
      {
        id: 1,
      name: 'Đàn Ông Sao Hỏa Đàn Bà Sao Kim',
      type: '1',
      author: 'Bao',
      price: 300000,
      description: 'Ngày xửa ngày xưa, những người sao Hỏa và sao Kim đã gặp gỡ, yêu nhau và sống hạnh phúc bởi họ tôn trọng và chấp nhận mọi điều khác biệt. Rồi họ đến Trái Đất và chứng lãng quên đã xảy ra: Họ quên rằng họ đến từ những hành tinh khác',
      img: 'https://salt.tikicdn.com/cache/400x400/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg',
    },
      {
        id: 2,
      name: 'Cây Cam Ngọt Của Tôi',
      type: '2',
      author: 'Bao',
      price: 104000,
      description: 'String',
      img: 'https://salt.tikicdn.com/cache/400x400/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg',
    },
      {
        id: 3,
      name: 'Bắt Trẻ Đồng Xanh (Tái Bản 2020)',
      type: '3',
      author: 'Bao',
      price: 59000,
      description: 'String',
      img: 'https://salt.tikicdn.com/cache/400x400/ts/product/65/74/fb/1e6ca7a2fa28d83667a8e50144e43d0d.jpg',
    },
      {
        id: 4,
      name: 'MÙI HOÀNG KIM',
      type: '1',
      author: 'Bao',
      price: 92000,
      description: 'String',
      img: 'https://salt.tikicdn.com/cache/400x400/ts/product/1f/bb/74/db16b2b5e39950680cfd4dca6e0e0faf.jpg',
    },
      {
        id: 5,
      name: 'Sóng ở đáy sông',
      type: '1',
      author: 'Bao',
      price: 69000,
      description: 'String',
      img: 'https://salt.tikicdn.com/cache/400x400/ts/product/77/55/5a/8dce4cda3cf978a27c73a9bf95919405.jpg',
    },
  
  ]
  );

  useEffect(() => {
    // axios.get('http://localhost:3001/api/products')
    //   .then(res => {
    //     setData(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
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
            <CardImg top src={item.img} alt="Card image cap" />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
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
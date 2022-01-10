import React from 'react';

import {
  Col,
  Card, CardTitle, CardText, CardGroup, CardBody
} from 'reactstrap';

function News(props) {
  return (
    <CardGroup>
      <Col>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Miễn phí giao hàng</CardTitle>
            <CardText>Chỉ cần đơn hàng {`>`} 300k </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <CardTitle tag="h5">30 ngày hoàn hàng</CardTitle>
            <CardText>We stand behind our goods
            and services and want you to be
            satisfied with them.
            We offer you a 30 day return policy</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Hỗ trợ hàng đầu</CardTitle>
            <CardText>Call our specialists for help
            with an order. Our customer service team is here to assist you.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Thanh toán an toàn</CardTitle>
            <CardText>All Payments are secured using latest SSL Encryption.</CardText>
          </CardBody>
        </Card>
      </Col>

    </CardGroup>
  );
}

export default News;
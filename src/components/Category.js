import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Col } from 'reactstrap';

const Category = (props) => {
  return (
    <Col md='3'>
      <div className='Category'>
        <p>Danh mục sản phẩm</p>
        <Nav vertical>
          <NavItem>
            <Link to='/sbc'>Sách bán chạy</Link>
          </NavItem>
          <NavItem>
            <Link to='/svh'>Sách văn học</Link>
          </NavItem>
          <NavItem>
            <Link to='/skn'>Sách kĩ năng</Link>
          </NavItem>
          <NavItem>
            <Link to='/skt'>Sáng kinh tế</Link>
          </NavItem>
          <NavItem>
            <Link to='/sta'>Sách tiếng anh</Link>
          </NavItem>
        </Nav>
      </div>
    </Col>
  );
}

export default Category;
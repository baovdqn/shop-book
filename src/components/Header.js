import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

import { Button, Form, Input } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md" className='mb-4'>
      <Container>
        <Link to='/' className='navbar-brand'>BookStore</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Form inline>
              <Input type="type" name="search" placeholder="Nhập thứ cần tìm kiếm" className='mr-2 input--search' />
              <Button outline color='primary'>Search</Button>
            </Form>
            <NavItem className='header__link ml-2'>
                <Link to='/login'>Đăng nhập</Link>
            </NavItem>
            <NavItem className='header__link ml-2'>
              <Link to='/register'>Đăng kí</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>

    </Navbar>
  );
}

export default Header;
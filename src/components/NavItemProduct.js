import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import {
  Link
} from "react-router-dom";

import { CartContext } from '../contexts/CartProvider'

const NavItemProduct = (props) => {
  return (
    <div>
      <Navbar className='Nav-product'>
        <Nav>
          <NavItem>
            <NavLink disabled href="#">Xin chào</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Giới thiệu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Sản phẩm</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Khuyến mại</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Tin tức</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <CartContext.Consumer>
          {({Cart}) => (
            <NavItem>
              <NavLink className='Nav-cart__cart' href="#">
              <Link to='/cart'>
              Giỏ hàng ({Cart.length})
              </Link>
              </NavLink>
            </NavItem>

          )}


          </CartContext.Consumer>

        </Nav>

      </Navbar>
    </div>
  );
}

export default NavItemProduct;
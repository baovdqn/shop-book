// Import component
import Header from './components/Header';
import Slide from './components/Carousel';
import NavItemProduct from './components/NavItemProduct'
import Category from './components/Category';
import News from './components/News'
import Footer from './components/Footer'

//Import page
import HomePage from './pages/HomePage'
// import ItemProduct from './pages/ItemProduct'
import Cart from './pages/Cart'
import ListItem from './pages/ListItem'
import ItemDetail from './pages/ItemDetail'

//import context
import { CartProvider } from './contexts/CartProvider'


import { Col, Container, Row } from 'reactstrap';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './index.css'

import BN from './assets/img/banner.jpg'
import login from './pages/login';
import register from './pages/register';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Header />
          <Container>
            <Row className='mb-3'>
              <Col xs="12" sm="12" md="12" lg='8'>
                <Slide />
              </Col>
              <Col sm="12" lg='4' xl='4'>
                <img className='slide-banner img-fluid' src={BN} alt='banner' />
                <img className='slide-banner img-fluid' src={BN} alt='banner' />
              </Col>
            </Row>
            <NavItemProduct />

            <Row className='mt-3'>
              <Category />
              <Switch>
                <Route path='/' exact component={HomePage}></Route>
                <Route path='/login' component={login}></Route>
                <Route path='/register' component={register}></Route>
                <Route path='/cart' component={Cart}></Route>
                <Route path='/sbc'>
                  <ListItem type='1'></ListItem>
                </Route>
                <Route path='/svh'>
                  <ListItem type='2'></ListItem>
                </Route>
                <Route path='/skn'>
                  <ListItem type='3'></ListItem>
                </Route>
                <Route path='/skt'>
                  <ListItem type='4'></ListItem>
                </Route>
                <Route path='/sta'>
                  <ListItem type='5'></ListItem>
                </Route>
                <Route path="/:id">
                  <ItemDetail></ItemDetail>
              </Route>
              </Switch>


            </Row>
            <Row className='Row-News mb-3 mt-3'>
              <News />
            </Row>

            <Row className='Row-footer'>
              <Footer></Footer>
            </Row>
          </Container>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;

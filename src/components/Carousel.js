import React from 'react';
import {UncontrolledCarousel 
} from 'reactstrap';

import BF1 from '../assets/img/bf1.jpg'
import BF2 from '../assets/img/bf2.jpg'
import BF3 from '../assets/img/bf3.jpg'


const items = [
    {
        src: BF1
    },
    {
        src: BF2,
    },
    {
        src: BF3
    }
  ];
  
  const Slide = () => <UncontrolledCarousel items={items} />;
  
  
export default Slide;
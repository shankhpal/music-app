import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';
import SideImage from './SideImage';
import MentorCard from './SlideCard';

import './imageslider.css';


function ImageSlider() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className=''>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          

          <Carousel.Item>
              <MentorCard />
              <Carousel.Caption>
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
              <SideImage />
              <Carousel.Caption>
              </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        </div>
 
    )
}

export default ImageSlider

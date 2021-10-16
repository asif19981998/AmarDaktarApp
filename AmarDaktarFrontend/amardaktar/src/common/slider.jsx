
import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import "./slider.css"



import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';





const Slider = ({...props}) => {
  return (
      <div className="container">
           <AliceCarousel
      autoPlay={true}
      mouseTracking
      items={props.items}
      paddingLeft={600} 
      responsive={3}
      animationType={"fadeout"}
      autoPlayInterval={500}
    //   activeIndex ={4}
      infinite={true}
      autoWidth={true}
      autoHeight={true}
      disableButtonsControls={true}
      
      
      />
      </div>
   
  );
}

export default Slider;
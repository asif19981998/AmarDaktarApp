
import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import "./slider.css"



import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
 
  <img style={{height:120,width:250,paddingRight:10}} src={'assets/img/e.png'} onDragStart={handleDragStart} />,
  <img style={{height:120,width:250,paddingRight:10}} src={'assets/img/m4.jpg'} onDragStart={handleDragStart} />,
  <img style={{height:120,width:250,paddingRight:10}} src={'assets/img/n1.png'} onDragStart={handleDragStart} />,
  <img style={{height:120,width:250,paddingRight:10}} src={'assets/img/s2.png'} onDragStart={handleDragStart} />,
 
];

const Slider = () => {
  return (
      <div className="container">
           <AliceCarousel
      autoPlay={true}
      mouseTracking
      items={items}
      paddingLeft={600} 
      responsive={3}
      animationType={"fadeout"}
      autoPlayInterval={500}
    //   activeIndex ={4}
      infinite={true}
      autoWidth={true}
      autoHeight={true}
      
      
      />
      </div>
   
  );
}

export default Slider;
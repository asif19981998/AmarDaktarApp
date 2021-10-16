import React from 'react'
import "./mediaPartner.css";
import Slider from '../../common/slider';
function MediaPartner() {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
 
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/a2.jpg'} onDragStart={handleDragStart} />,
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/d.png'} onDragStart={handleDragStart} />,
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/j.png'} onDragStart={handleDragStart} />,
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/s10.jpg'} onDragStart={handleDragStart} />,
       
      ];
    return (
        <div style={{marginTop:5}}>
            <h3 style={{textAlign:"center"}}>Media Partner</h3>
           <Slider items={items}></Slider>
        </div>
    )
}

export default MediaPartner

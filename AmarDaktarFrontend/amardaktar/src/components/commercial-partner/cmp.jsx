import React from 'react'
import "./cmp.css";
import Slider from '../../common/slider';
function CommercialPartner() {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
 
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/e.png'} onDragStart={handleDragStart} />,
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/m4.jpg'} onDragStart={handleDragStart} />,
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/n1.png'} onDragStart={handleDragStart} />,
        <img style={{height:90,width:250,paddingRight:10}} src={'assets/img/s2.png'} onDragStart={handleDragStart} />,
       
      ];
    return (
        <div style={{marginTop:5}}>
        <h3 style={{textAlign:"center"}}>Strategic Partner</h3>
       <Slider items={items}></Slider>
    </div>
    )
}

export default CommercialPartner

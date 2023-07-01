import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "./Slider.scss"


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4668525/pexels-photo-4668525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4668511/pexels-photo-4668511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        
    ]
    
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);

    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastIcon/>
        </div>
      </div>
    </div>
  );
}

export default Slider;

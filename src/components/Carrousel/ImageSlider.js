import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleRight ,FaArrowCircleLeft } from 'react-icons/fa'

const ImageSlider = (slides) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
    };

    if(current < 1)
    return null

  return (
    <section className="slider">

    <FaArrowCircleRight className="right-arrow" onClick={nextSlide}/>
    <FaArrowCircleLeft className="left-arrow" onClick={prevSlide}/>

      {SliderData.map((slide, index) => {

        return (

          <div className={index === current ? 'slide active' : 'slide'} key={index} >
          {index === current && (<img  src={slide.image} alt='oioi papai' className="image" />)}

          </div>
        )
      })}
    </section>
  );
};

export default ImageSlider;

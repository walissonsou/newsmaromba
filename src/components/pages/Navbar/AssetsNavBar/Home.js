import React from 'react';
import './App.css';

import  {SliderData} from '../../../Carrousel/SliderData'
import ImageSlider from '../../../Carrousel/ImageSlider'

export default function Home(){
  return(
    <div className="pageHome">
      <ImageSlider slides={SliderData} />
    </div>
  )
}

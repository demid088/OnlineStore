import React, { Fragment } from 'react'

import '../css/Slider.css'

import slide_1 from '../assets/img/slider/slide_1.jpg'

function Slider() {
  return (
    <div className="slider container-fluid p-0">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide_1} className="d-block w-100" alt="slide_1" />
          </div>
          <div className="carousel-item">
            <img src={slide_1} className="d-block w-100" alt="slide_2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider;
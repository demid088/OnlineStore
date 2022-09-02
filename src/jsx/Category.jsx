import React from 'react'

import '../css/Category.css'

import category_1 from '../img/category/category_1.jpg'
import category_2 from '../img/category/category_2.jpg'
import category_3 from '../img/category/category_3.jpg'
import category_4 from '../img/category/category_4.jpg'

function Category() {
  return (
    <section className="category container-xxl mt-5">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {/* HOT DEAL FOR MEN */}
        <div class="col">
          <div class="card text-bg-light">
            <img src={category_1} class="card-img" alt="HOT DEAL FOR MEN" />
            <div class="card-img-overlay">
              <div className='card_canvas'>
                <span className='card_text'>HOT DEAL</span>
                <br />
                <span className='card_subtext'>FOR MEN</span>
              </div>
            </div>
          </div>
        </div>
        {/* new arrivals FOR kids */}
        <div class="col">
          <div class="card text-bg-light">
            <img src={category_4} class="card-img" alt="new arrivals FOR kids" />
            <div class="card-img-overlay">
              <div className='card_canvas'>
                <span className='card_text'>new arrivals</span>
                <br />
                <span className='card_subtext'>FOR kids</span>
              </div>
            </div>
          </div>
        </div>
        {/* 30% offer women */}
        <div class="col">
          <div class="card text-bg-light">
            <img src={category_2} class="card-img" alt="30% offer women" />
            <div class="card-img-overlay">
              <div className='card_canvas'>
                <span className='card_text'>30% offer</span>
                <br />
                <span className='card_subtext'>women</span>
              </div>
            </div>
          </div>
        </div>
        {/* LUXIROUS & trendy ACCESORIES */}
        <div class="col">
          <div class="card text-bg-light">
            <img src={category_3} class="card-img" alt="LUXIROUS & trendy ACCESORIES" />
            <div class="card-img-overlay">
              <div className='card_canvas'>
                <span className='card_text'>LUXIROUS & trendy</span>
                <br />
                <span className='card_subtext'>ACCESORIES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category;
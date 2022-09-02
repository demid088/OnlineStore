import React from 'react'

import '../css/Product.css'

import product_1 from '../img/product/product_1.jpg'
import product_2 from '../img/product/product_2.jpg'
import product_3 from '../img/product/product_3.jpg'
import product_4 from '../img/product/product_4.jpg'
import product_5 from '../img/product/product_5.jpg'
import product_6 from '../img/product/product_6.jpg'
import product_7 from '../img/product/product_7.jpg'
import product_8 from '../img/product/product_8.jpg'

//=========================================== DATABASE
import data from '../DATA.JSON'
const products = data.products
const prodIDs = Object.keys(products)
//=========================================== 

function Product() {
  return (
    <section className="product container-xxl mt-5">
      <header className='text-center'>
        <h2>Fetured Items</h2>
        <h6 className='text-muted'>Shop for items based on what we featured in this week</h6>
      </header>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mt-1 mb-5">
        {
          prodIDs.map((id, index) => {
            import (products[id].img)
            return (
              <div key={index} className="col">
                <div className="card">
                  <img src={products[id].img} className="card-img-top" alt={products[id].name} />
                  <div className="card-body">
                    <h5 className="card-title">{products[id].name}</h5>
                    <p className="card-text text-danger"><b>{products[id].currency}{products[id].price}</b></p>
                  </div>
                </div>
              </div>
            )
          })
        }
        {/* 1 */}
        <div class="col">
          <div class="card">
            <img src={product_1} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div class="col">
          <div class="card">
            <img src={product_2} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div class="col">
          <div class="card">
            <img src={product_3} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div class="col">
          <div class="card">
            <img src={product_4} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div class="col">
          <div class="card">
            <img src={product_5} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div class="col">
          <div class="card">
            <img src={product_6} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
        {/* 7 */}
        <div class="col">
          <div class="card">
            <img src={product_7} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div class="col">
          <div class="card">
            <img src={product_8} class="card-img-top" alt="Mango People T-shirt" />
            <div class="card-body">
              <h5 class="card-title">Mango People T-shirt</h5>
              <p class="card-text text-danger"><b>$52.00</b></p>
            </div>
          </div>
        </div>
      </div>
      <footer className='text-center'>
        <button className='btn btn-danger'>Browse All Product<i class="bi bi-arrow-right-short" /></button>
      </footer>
    </section>
  )
}

export default Product;
import React from 'react'

import '../css/Product.css'

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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mt-1 mb-5">
        {
          prodIDs.map((id, index) => {
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
      </div>
      <footer className='text-center'>
        <button className='btn btn-danger'>Browse All Product<i className="bi bi-arrow-right-short" /></button>
      </footer>
    </section>
  )
}

export default Product;
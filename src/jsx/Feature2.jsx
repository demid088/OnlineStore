import React from 'react'

import '../css/Feature2.css'

function Feature2() {
  return (
    <section className="feature_2 border-dark text-bg-dark mt-5">
      <div className="container-xxl">
        <div class="row row-cols-1 row-cols-sm-3 g-0">

          <div className="col d-flex flex-column align-items-center text-center m-0 p-3 p-lg-5">
            <div className="col-2 fs-1 text-danger">
              <i class="bi bi-car-front" />
            </div>
            <div className="col pt-3">
              <h5 class="card-title">Free Delivery</h5>
              <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
          </div>

          <div className="col d-flex flex-column align-items-center text-center m-0 p-3 p-lg-5">
            <div className="col-2 fs-1 text-danger">
              <i class="bi bi-percent" />
            </div>
            <div className="col pt-3">
              <h5 class="card-title">Sales & discounts</h5>
              <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
          </div>

          <div className="col d-flex flex-column align-items-center text-center m-0 p-3 p-lg-5">
            <div className="col-2 fs-1 text-danger">
              <i class="bi bi-hand-thumbs-up" />
            </div>
            <div className="col pt-3">
              <h5 class="card-title">Quality assurance</h5>
              <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Feature2;
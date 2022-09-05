import React from 'react'

import '../css/Feature.css'

function Feature() {
  return (
    <section className="feature container-xxl mt-5">
      <div className="card border-dark text-bg-dark">
        <div class="row g-0">
          <div class="col-7">
            <img src='../img/feature/feature_bg.jpg' class="img-fluid rounded-start" alt="feature" />
          </div>
          <div class="col-5">
            <div class="card-body h-100 ">
              <div className="row h-100 flex-column">
                <div className="col d-flex flex-column justify-content-center">
                  <h5 class="card-title">Free Delivery</h5>
                  <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>

                <div className="col d-flex flex-column justify-content-center">
                  <h5 class="card-title">Sales & discounts</h5>
                  <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>

                <div className="col d-flex flex-column justify-content-center">
                  <h5 class="card-title">Quality assurance</h5>
                  <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature;
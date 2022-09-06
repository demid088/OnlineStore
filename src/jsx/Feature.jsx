import React from 'react'

import '../css/Feature.css'

function Feature() {
  return (
    <section className="feature container-xxl mt-5">
      <div className="card border-dark text-bg-dark">
        <div class="row g-0">
          <div class="col-12 col-md-7">
            <img src='../img/feature/feature_bg.jpg' class="rounded-start w-100 h-100" alt="feature" />
          </div>
          <div class="col-12 col-md-5">
            <div class="card-body h-100 ">
              <div className="row h-100 flex-column">
                <div className="col d-flex flex-column mt-4">
                  <div className="row px-4">
                    <div className="col-2 fs-1 text-danger">
                      <i class="bi bi-car-front" />
                    </div>
                    <div className="col pt-3">
                      <h5 class="card-title">Free Delivery</h5>
                      <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column mt-4">
                  <div className="row px-4">
                    <div className="col-2 fs-1 text-danger">
                      <i class="bi bi-percent" />
                    </div>
                    <div className="col pt-3">
                      <h5 class="card-title">Sales & discounts</h5>
                      <p class="card-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                  </div>
                  </div>
                  <div className="col d-flex flex-column mt-4">
                    <div className="row px-4">
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

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature;
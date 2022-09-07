import React from 'react'

import '../css/Subscribe.css'

import subscribe_photo from '../img/subscribe/subscribe_slide_photo.png'

function Subscribe() {
  return (
    <section className="subscribe container-fluid mt-5 p-0">
      <div className="container-xxl p-0 pt-5">
        <div className="row row-cols-1 row-cols-lg-2 align-items-center text-bg-light pt-lg-5 pb-4 bg-transparent">
          {/* LEFT */}
          <div className="col px-5 px-lg-3 pt-lg-5">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={subscribe_photo} class="d-block position-absolute top-0 left-0" alt="photo_account" />
                  <div className="col-7 col-lg-10 ms-auto">
                    <p><em>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</em></p>
                    <p className='text-danger'><b>Bin Burhan</b></p>
                    <small>Dhaka, Bd</small>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={subscribe_photo} class="d-block position-absolute top-0 left-0" alt="photo_account" />
                  <div className="col-7 col-lg-10 ms-auto">
                    <p><em>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</em></p>
                    <p className='text-danger'><b>Bin Burhan</b></p>
                    <small>Dhaka, Bd</small>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={subscribe_photo} class="d-block position-absolute top-0 left-0" alt="photo_account" />
                  <div className="col-7 col-lg-10 ms-auto">
                    <p><em>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</em></p>
                    <p className='text-danger'><b>Bin Burhan</b></p>
                    <small>Dhaka, Bd</small>
                  </div>
                </div>
              </div>
              <div class="carousel-indicators justify-content-start position-static mt-4">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col text-center text-uppercase pt-4 pt-lg-5 px-5">
            <h4>Subscribe</h4>
            <p className='m-0'>FOR OUR NEWLETTER and PROMOTION</p>
            <div class="input-group w-auto mt-4 mx-5 flex-wrap">
              <input type="text" class="form-control bg-light input_email" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="btnGroupAddon" />
              <button type="button" class="btn btn-danger">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe;
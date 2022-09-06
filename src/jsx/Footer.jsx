import React from 'react'

import '../css/Footer.css'

import logo from '../img/logo.png'

function Footer() {
  return (
    <section className="footer container-fluid bg-white m-0 p-0 pt-5">
      {/* LINKS */}
      <div className="container-xxl">
        <div className="row py-5">
          {/* 1 */}
          <div className="col-12 col-lg-5 me-lg-5 mb-5">
            {/* LOGO */}
            <a className="navbar-brand" href="#">
              <img className='me-2' src={logo} alt="logo" width="59" height="51" />
              <span className="align-middle fs-5">BRAN
                <strong className='text-danger'>D</strong>
              </span>
            </a>
            <p className='text-muted'>
              Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. 
            </p>
            <p className='text-muted'>
              Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
            </p>
          </div>
          {/* 2 */}
          <div className="col-12 text-center text-md-start col-md-3 col-lg-2">
            <h5 className='text-uppercase text-danger mb-4'><b>COMPANY</b></h5>
            <ul class="list-group list-group-flush d-block text-muted">
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Home</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Shop</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>About</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>How It Works</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Contact</b></a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div className="col-12 text-center text-md-start col-md-3 col-lg-2">
            <h5 className='text-uppercase text-danger'><b>INFORMATION</b></h5>
            <ul class="list-group list-group-flush d-block text-muted">
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Tearms & Condition</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Privacy Policy</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>How to Buy</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>How to Sell</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Promotion</b></a>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div className="col-12 text-center text-md-start col-md-3 col-lg-2">
            <h5 className='text-uppercase text-danger'><b>SHOP CATEGORY</b></h5>
            <ul class="list-group list-group-flush d-block text-muted">
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Men</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Women</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Child</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Apparel</b></a>
              </li>
              <li class="d-block my-4">
                <a href="" className='text-decoration-none text-reset'><b>Brows All</b></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* COPYRIGHT */}
      <footer className='bg-light py-4'>
        <div className="container-xxl">
          <div className="row row-cols-1 row-cols-sm-2 text-center text-sm-start">
            <div className="col">
              <p className='text-muted mt-0'>
                <strong>© 2017  Brand  All Rights Reserved.</strong>
              </p>
            </div>
            <div className="col">
              <div className="row row-cols-5 justify-content-center justify-content-sm-end text-center text-muted">
                <div className="col fs-5 p-0 social_link_btn">
                  <i class="bi bi-facebook" />
                </div>
                <div className="col fs-5 p-0 social_link_btn">
                  <i class="bi bi-twitter"></i>
                </div>
                <div className="col fs-5 p-0 social_link_btn">
                  <i class="bi bi-linkedin"></i>
                </div>
                <div className="col fs-5 p-0 social_link_btn">
                  <i class="bi bi-pinterest"></i>
                </div>
                <div className="col fs-5 p-0 social_link_btn">
                  <i class="bi bi-google"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer;
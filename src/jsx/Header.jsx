import React, { Fragment } from 'react'

import '../css/Header.css'

import logo from '../assets/img/logo.png'

//=========================================== DATABASE
import data from '../DATA.JSON'
const searchDropdown = data.searchDropdown
const menu = data.menu
const dataKeys = Object.keys(searchDropdown)
//=========================================== 

function Header() {
  return (
    <header className="header bg-light">
      <div className="container-xxl">
        {/* MAIN */}
        <nav className="navbar">
          <div className="container-fluid flex-nowrap">
            {/* LOGO */}
            <a className="navbar-brand" href="#">
              <img className='me-2' src={logo} alt="logo" width="59" height="51" />
              <span class="align-middle">BRAN
                <strong className='text-danger'>D</strong>
              </span>
            </a>
            {/* Поиск */}
            <form className="input-group w-auto">
              <select className="form-select bg-light" aria-label="Browse">
                <option selected disabled>Browse...</option>
                {
                    dataKeys.map((caption, index) => {
                      return (
                        <Fragment key={index}>
                          {/* <option disabled><hr /></option> */}
                          <option disabled className="text-center text-uppercase fs-5 fw-semibold lh-lg">{caption}</option>
                          {searchDropdown[caption].map((item, index) => {
                            return(
                              <option key={index}><a className="dropdown-item" href="#">{item}</a></option>
                            )
                          })}
                        </Fragment>
                      )
                    })
                  }
              </select>
              <input className="form-control" type="search" placeholder="Search for Item..." aria-label="Search" />
              <button className="btn btn-secondary" type="submit"><i className="bi bi-search" /></button>
            </form>
            {/* Cart Account */}
            <div className='d-flex align-items-center'>
              <a class="fs-2 link-dark" href="#"><i className="bi bi-cart2" /></a>
              <div class="dropdown ms-4">
                <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownAccount" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  My Account
                </button>
                <form class="dropdown-menu p-3">
                  <div class="mb-3">
                    <label for="exampleDropdownFormEmail2" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                      <label class="form-check-label" for="dropdownCheck2">
                        Stay signed in
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-secondary">Log In</button>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Forgot your password?</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Register!</a>
                </form>
              </div>
            </div>
          </div>
        </nav>
        {/* MENU */}
        <nav class="nav text-uppercase fw-semibold border-top justify-content-center mt-1 py-1">
          {
            menu.map(
              (item, index) => {
                return(
                  <a key={index} class="nav-link link-dark mx-2" href="#">{item}</a>
                )
              }
            )
          }
        </nav>
      </div>
    </header>
  );
}

export default Header;

{/* 
<div className="header__brand col left">
<img src={logo} alt="Brand" className="header__logo" />
BRAND
</div>

<div className="header__search col m8">
<nav>
  <div className="nav-wrapper row center">
    
    Dropdown Trigger
    <a className="btn dropdown-trigger col left" href="#" data-target="dropdown1">Browse<i className="material-icons right">arrow_drop_down</i></a>
    Dropdown Structure
    <ul id="dropdown1" className="dropdown-content browser-default">
      {
        dataKeys.map((caption, index) => {
          return (
            <Fragment key={index}>
              <li className="divider" tabIndex="-1" />
              <li className='valign-wrapper flow-text'><b className='search__dropdown_caption'>{caption.toUpperCase()}</b></li>
              <li className="divider" tabIndex="-1" />
              {searchDropdown[caption].map((item, index) => {
                return(
                  <li key={index}><a href="#">{item}</a></li>
                )
              })}
            </Fragment>
          )
        })
      }
    </ul>
    <form className='col'>
      <div className="input-field valign-wrapper">
        <input className='browser-default' id="search" type="search" placeholder="search" required />
        <label className="label-icon valign-wrapper" htmlFor="search"><i className="material-icons">search</i></label>
      </div>
    </form>
  </div>
</nav>
</div>

<div className="header__account col right">

</div> 


      //=========================================== СТАРАЯ!!!!!!!!!!!
      <nav>
        <div className="nav-wrapper row">

          <div className="header__logo col s2 left">
            <a href="#!" className="brand-logo">
              <img className="responsive-img" src={logo} />
            </a>
          </div>

          <div className="col s8 center">
            <ul className="hide-on-med-and-down">
              <!-- Dropdown Trigger -->
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown">Browse<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>

          <div className="col s2 right">
            <a className="btn-floating white">
              <i className="material-icons black-text">shopping_cart</i>
            </a>
            <a className="dropdown-trigger" href="#!" data-target="dropdown2">My Account<i className="material-icons">arrow_drop_down</i></a>
          </div> 
        </div>
      </nav>

      <!-- Dropdown Structure -->
      <ul id="dropdown" className="dropdown-content">
        {
          dataKeys.map((caption, index) => {
            return (
              <Fragment key={index}>
                <li className="divider" />
                <li className=''><b>{caption.toUpperCase()}</b></li>
                <li className="divider" />
                {
                  searchDropdown[caption].map((item, index) => {
                    return(
                      <li key={index}><a href="#">{item}</a></li>
                    )
                })}
              </Fragment>
            )
          })
        }
      </ul>

      {/* ==========ВРУЧНУЮ НАФУЙ==========

      <div className="header__hand row yellow">

        <div className="header__logo col s3">
          <a className='header__logo_link' href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="header__search col s6">
          <button className='btn search__button_browse'>
            <span>Browse</span>
            <i className="material-icons">arrow_drop_down</i>
          </button>
          {/* <input type="search" name="search__input" id="search__input" />
          <input type="" name="search__input" id="search__input" />
          <button className='btn search__button'>
            <i className="material-icons">search</i>
          </button>
        </div>

        <div className="header__account col s3">
          <i className="material-icons black-text">shopping_cart</i>
          <button className='btn'>
            <span>My Account</span>
            <i className="material-icons">arrow_drop_down</i>
          </button>
        </div>

      </div>


      {/* <!-- Dropdown Structure --> *
      <ul id="dropdown1" className="dropdown-content">
        {
          dataKeys.map((caption, index) => {
            return (
              <Fragment key={index}>
                <li className="divider" />
                <li><b>{caption.toUpperCase()}</b></li>
                <li className="divider" />
                {
                  searchDropdown[caption].map((item, index) => {
                    return(
                      <li key={index}><a href="#">{item}</a></li>
                    )
                })}
              </Fragment>
            )
          })
        }
      </ul>
      {/* NAV *
      <nav>
        <div className="nav-wrapper row">
          {/* LOGO *
          <div className="col s3">
            <a href="#!" className="brand-logo col s3">Logo</a>
          </div>
          
          {/* Search Bar *
          <div className="col s6">
            <form className=''>
              <div className="input-field col s6">
                <input id="search" type="search" required />
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>

          {/* Account *
          <div className="col s3">
            <ul className="right hide-on-med-and-down col s3">
              <li><a className="btn-floating red">
                    <i className="material-icons">shopping_cart</i>
                  </a></li>
              {/* <!-- Dropdown Trigger --> *
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">My Account<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>

        </div>
      </nav>

*/}
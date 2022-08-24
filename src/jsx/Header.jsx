import React, { Fragment } from 'react'

import '../css/Header.css'

import logo from '../assets/img/logo.png'

//=========================================== DATABASE
import data from '../DATA.JSON'
const searchDropdown = data.searchDropdown
const dataKeys = Object.keys(searchDropdown)
console.log(searchDropdown)
//=========================================== DATABASE

function Header() {
  return (
    <header className="header">

      <nav>
        <div className="nav-wrapper row">

          <div className="header__logo col s2 left">
            <a href="#!" className="brand-logo">
              <img className="responsive-img" src={logo} />
            </a>
          </div>

          <div className="col s8 center">
            <ul className="hide-on-med-and-down">
              {/* <!-- Dropdown Trigger --> */}
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Browse<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>

          <div className="col s2 right">
            <a class="btn-floating white">
              <i class="material-icons black-text">shopping_cart</i>
            </a>
            <a className="dropdown-trigger" href="#!" data-target="dropdown2">My Account<i className="material-icons">arrow_drop_down</i></a>
          </div> 
        </div>
      </nav>

      {/* <!-- Dropdown Structure --> */}
      <ul id="dropdown1" className="dropdown-content">
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

      {/* ==========ВРУЧНУЮ НАФУЙ========== */}

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
          {/* <input type="search" name="search__input" id="search__input" /> */}
          <input type="" name="search__input" id="search__input" />
          <button className='btn search__button'>
            <i className="material-icons">search</i>
          </button>
        </div>

        <div className="header__account col s3">
          <i class="material-icons black-text">shopping_cart</i>
          <button className='btn'>
            <span>My Account</span>
            <i className="material-icons">arrow_drop_down</i>
          </button>
        </div>

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
*/}
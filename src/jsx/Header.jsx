import React, { Fragment } from 'react'
import { NavLink } from "react-router-dom";

import '../css/Header.css'

import logo from '../img/logo.png'

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
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* LOGO */}
            <NavLink className="navbar-brand" to="/">
              <img className='me-2' src={logo} alt="logo" width="59" height="51" />
              <span className="align-middle">BRAN
                <strong className='text-danger'>D</strong>
              </span>
            </NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon"></span>
            </button>
            {/* ***BURGER-MENU*** */}
            {/* Поиск */}
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <form className="input-group w-auto mx-auto my-4 my-lg-auto">
                <select className="form-select bg-light" aria-label="Browse" defaultValue="browse">
                  <option value="browse" disabled>Browse...</option>
                  {
                      dataKeys.map((caption, index) => {
                        return (
                          <Fragment key={index}>
                            <option value={caption} disabled className="text-center text-uppercase fs-5 fw-semibold lh-lg">{caption}</option>
                            {searchDropdown[caption].map((item, index) => {
                              return(
                                <option value={item} key={index}>{item}</option>
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
              <div className='d-flex align-items-center justify-content-between'>
                <a className="fs-2 link-dark" href="#"><i className="bi bi-cart2" /></a>
                <div className="dropdown ms-4">
                  <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownAccount" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    My Account
                  </button>
                  <form className="dropdown-menu p-3">
                    <div className="mb-3">
                      <label htmlFor="exampleDropdownFormEmail2" className="form-label">E-mail</label>
                      <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                        <label className="form-check-label" htmlFor="dropdownCheck2">
                          Stay signed in
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-secondary">Log In</button>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Forgot your password?</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Register!</a>
                  </form>
                </div>
              </div>
            </div>
            {/* *** *** */}
          </div>
        </nav>
        {/* MENU */}
        <nav className="nav text-uppercase fw-semibold border-top justify-content-center mt-1 pt-1">
          {
            menu.map(
              (item, index) => {
                return(
                  <NavLink key={index} className="nav-link link-dark mx-2" to="/catalog">{item}</NavLink>
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
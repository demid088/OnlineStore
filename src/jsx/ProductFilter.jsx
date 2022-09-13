import React, { Fragment } from 'react'
import Nouislider from "nouislider-react";

import "nouislider/distribute/nouislider.css";
import '../css/ProductFilter.css'

//=========================================== DATABASE
import data from '../DATA.JSON'
const catalog = data.catalog
//=========================================== 

function ProductFilter() {
  return (
    <section className='product_filter container-xxl my-5'>
      <div className="row justify-content-center">
        <aside className="col-12 col-sm-6 col-lg-auto mx-auto mx-lg-0 p-0 px-lg-4 sidebar">
          <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  CATEGORY
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <ul class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action">Accessories</a>
                    <a href="#" class="list-group-item list-group-item-action">Bags</a>
                    <a href="#" class="list-group-item list-group-item-action">Denim</a>
                    <a href="#" class="list-group-item list-group-item-action">Hoodies/Sweatshirts</a>
                    <a href="#" class="list-group-item list-group-item-action">Jackets/Coats</a>
                    <a href="#" class="list-group-item list-group-item-action">Pants</a>
                    <a href="#" class="list-group-item list-group-item-action">Polos</a>
                    <a href="#" class="list-group-item list-group-item-action">Shirts</a>
                    <a href="#" class="list-group-item list-group-item-action">Shoes</a>
                    <a href="#" class="list-group-item list-group-item-action">Shorts</a>
                    <a href="#" class="list-group-item list-group-item-action">Sweaters/Knits</a>
                    <a href="#" class="list-group-item list-group-item-action">T-Shirts</a>
                    <a href="#" class="list-group-item list-group-item-action">Tanks</a>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  BRAND
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <ul class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action">BRAND_1</a>
                    <a href="#" class="list-group-item list-group-item-action">BRAND_2</a>
                    <a href="#" class="list-group-item list-group-item-action">BRAND_3</a>
                    <a href="#" class="list-group-item list-group-item-action">BRAND_4</a>
                    <a href="#" class="list-group-item list-group-item-action">BRAND_5</a>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  DESIGNER
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <ul class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action">DESIGNER_1</a>
                    <a href="#" class="list-group-item list-group-item-action">DESIGNER_2</a>
                    <a href="#" class="list-group-item list-group-item-action">DESIGNER_3</a>
                    <a href="#" class="list-group-item list-group-item-action">DESIGNER_4</a>
                    <a href="#" class="list-group-item list-group-item-action">DESIGNER_5</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="col-12 col-lg-9 mt-5 mt-lg-0">
          {/* SIZE & PRICE */}
          <div className="row bg-white pt-3">
            {/* SIZE */}
            <div className="col-12 col-sm-6 px-3 px-sm-4 mt-0 mb-4">
              <h5 className='mb-4'>SIZE</h5>
              <div class="form-check form-check-inline m-3 m-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="XXS" />
                <label class="form-check-label" for="inlineCheckbox1">XXS</label>
              </div>
              <div class="form-check form-check-inline m-3 m-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="XS" />
                <label class="form-check-label" for="inlineCheckbox2">XS</label>
              </div>
              <div class="form-check form-check-inline m-3 m-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="S" />
                <label class="form-check-label" for="inlineCheckbox3">S</label>
              </div>
              <div class="form-check form-check-inline m-3 m-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="M" />
                <label class="form-check-label" for="inlineCheckbox4">M</label>
              </div>
              <div class="form-check form-check-inline m-3 m-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="L" />
                <label class="form-check-label" for="inlineCheckbox5">L</label>
              </div>
              <div class="form-check form-check-inline m-3 m-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="XL" />
                <label class="form-check-label" for="inlineCheckbox6">XL</label>
              </div>
              <div class="form-check form-check-inline m-3 m-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="XXL" />
                <label class="form-check-label" for="inlineCheckbox7">XXL</label>
              </div>
            </div>
            {/* PRICE */}
            <div className="col-12 col-sm-6 px-3 px-sm-4 mt-0 mb-4">
              <h5 className='mb-4'>PRICE</h5>
              <Nouislider
                className="slider-styled"
                id="slider-round"
                range={{ min: 0, max: 1000 }}
                start={[20, 500]}
                connect />
            </div>
          </div>
          {/* SORT BY */}
          <div className="row bg-light p-sm-3">
            <div className="col-12 col-sm-6 col-md-4 my-3 m-sm-0">
              <div class="input-group">
                <label class="input-group-text bg-white" for="inputGroupSortBy">Sort By</label>
                <select class="form-select bg-white" id="inputGroupSortBy">
                  <option value="Name" selected>Name</option>
                  <option value="Brand">Brand</option>
                  <option value="Price">Price</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 my-3 m-sm-0">
              <div class="input-group">
                <label class="input-group-text bg-white" for="inputGroupShow">Show</label>
                <select class="form-select bg-white" id="inputGroupShow">
                  <option value="3">3</option>
                  <option value="6">6</option>
                  <option value="9" selected>9</option>
                  <option value="20">20</option>
                  <option value="40">40</option>
                  <option value="80">80</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
          </div>
          {/* PRODUCTS */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 bg-white g-4 my-2 mb-5">
          {
            catalog.map((objProduct, index) => {
              if (index > 8) return;
              return (
                <div key={index} className="col">
                  <div className="card">
                    <img src={objProduct.img} className="card-img-top" alt={objProduct.title} />
                    <div className="card-body">
                      <h5 className="card-title">{objProduct.title}</h5>
                      <div className="d-flex justify-content-between">
                        <span className='text-muted'>{objProduct.category}</span>
                        <span className='text-muted'>{objProduct.size}</span>
                      </div>
                      <p className="card-text text-danger">
                        <b>${objProduct.price}</b>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
          {/* PAGINATION */}
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start align-items-center mb-5 mb-sm-0">
              <nav aria-label="Product navigation">
                <ul class="pagination mb-0">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Prev">
                      <i className="bi bi-chevron-left" aria-hidden="true" />
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                    <i className="bi bi-chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center">
              <button type="button" class="btn btn-outline-danger px-5">View All</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductFilter;
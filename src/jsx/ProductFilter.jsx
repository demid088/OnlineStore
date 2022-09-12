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
      <div className="row">
        <div className="col-3 sidebar">
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
        </div>
        <div className="col-9">
          {/* SIZE & PRICE */}
          <div className="row">
            {/* SIZE */}
            <div className="col mx-5 mt-0 mb-4">
              <h5 className='mb-4'>SIZE</h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="XXS" />
                <label class="form-check-label" for="inlineCheckbox1">XXS</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="XS" />
                <label class="form-check-label" for="inlineCheckbox2">XS</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="S" />
                <label class="form-check-label" for="inlineCheckbox3">S</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="M" />
                <label class="form-check-label" for="inlineCheckbox4">M</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="L" />
                <label class="form-check-label" for="inlineCheckbox5">L</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="XL" />
                <label class="form-check-label" for="inlineCheckbox6">XL</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="XXL" />
                <label class="form-check-label" for="inlineCheckbox7">XXL</label>
              </div>
            </div>
            {/* PRICE */}
            <div className="col mx-5 mt-0 mb-4">
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
          <div className="row bg-light p-3">
            <div className="col-3">
              <div class="input-group">
                <label class="input-group-text bg-white" for="inputGroupSortBy">Sort By</label>
                <select class="form-select bg-white" id="inputGroupSortBy">
                  <option value="Name" selected>Name</option>
                  <option value="Brand">Brand</option>
                  <option value="Price">Price</option>
                </select>
              </div>
            </div>
            <div className="col-3">
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
          <div className="row bg-white">
            {/* ЦИКЛ СДЕЛАТЬ */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductFilter;
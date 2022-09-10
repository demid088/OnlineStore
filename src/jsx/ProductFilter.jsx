import React, { Fragment } from 'react'
import { Link } from "react-router-dom"


import '../css/ProductFilter.css'

//=========================================== DATABASE
import data from '../DATA.JSON'
const catalog = data.catalog
//=========================================== 

function ProductFilter() {
  return (
    <section className='product_filter'>
      <h1>PRODUCT FILTER</h1>
    </section>
  );
}

export default ProductFilter;
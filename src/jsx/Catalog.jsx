import React from 'react'

import Breadcrumb from './Breadcrumb.jsx'
import ProductFilter from './ProductFilter.jsx'
import Feature2 from './Feature2.jsx'

import '../css/Catalog.css'

//=========================================== DATABASE
import data from '../DATA.JSON'
const catalog = data.catalog
//=========================================== 

function Catalog() {
  return (
    <>
      <Breadcrumb crumbs={['Home', 'Catalog', 'MAN']} />
      <ProductFilter />
      <Feature2 />
    </>
  );
}

export default Catalog;